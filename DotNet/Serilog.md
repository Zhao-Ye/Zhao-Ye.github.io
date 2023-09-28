#  安装

```
dotnet add package Serilog.AspNetCore
```

# 修改 Program.cs

```C#
using Serilog;
using Serilog.Events;

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
    .Enrich.FromLogContext()
    .WriteTo.Console()
    .WriteTo.File("Logs/", rollingInterval: RollingInterval.Day, fileSizeLimitBytes: 10 * 1024 * 1024,
        retainedFileCountLimit: 10, rollOnFileSizeLimit: true, shared: true,
        flushToDiskInterval: TimeSpan.FromSeconds(1))
    .CreateLogger();

try
{
    Log.Information("启动。。。");

    var builder = WebApplication.CreateBuilder(args);

    builder.Host.UseSerilog();

    var app = builder.Build();

    app.UseSerilogRequestLogging();
    
    app.MapGet("/", () => "Hello World!");

    await app.RunAsync();
}
catch (Exception e)
{
    Log.Fatal(e, "异常退出");
}
finally
{
    Log.CloseAndFlush();
}
```

```C#
using Serilog;

var builder = WebApplication.CreateBuilder(args);

Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(builder.Configuration)
    .CreateLogger();

Log.Information("启动。。。");

try
{
    builder.Host.UseSerilog();

    builder.Services.AddControllersWithViews();

    var app = builder.Build();

    app.UseSerilogRequestLogging();

    app.UseStaticFiles();
    
    app.MapControllerRoute(name: "default", pattern: "{controller=Home}/{action=Index}/{id?}");

    await app.RunAsync();
}
catch (Exception e)
{
    Log.Fatal(e, "异常退出");
}
finally
{
    Log.CloseAndFlush();
}
```

```json
  "Serilog": {
    "Using":  [ "Serilog.Sinks.Console", "Serilog.Sinks.File" ],
    "MinimumLevel": "Debug",
    "WriteTo": [
      { "Name": "Console" },
      { "Name":"File", "Args": { "path":"Logs/", "rollingInterval":"Day" } }
    ],
    "Enrich": [ "FromLogContext", "WithMachineName", "WithThreadId" ],
    "Destructure": [
      { "Name": "ToMaximumDepth", "Args": { "maximumDestructuringDepth": 4 } },
      { "Name": "ToMaximumStringLength", "Args": { "maximumStringLength": 100 } },
      { "Name": "ToMaximumCollectionCount", "Args": { "maximumCollectionCount": 10 } }
    ],
    "Properties": {
      "Application": "Sample"
    }
  }
```