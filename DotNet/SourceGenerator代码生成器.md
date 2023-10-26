# SourceGenerator代码生成器

- 新建 netstandard2.0 目标框架的类库
- 添加 NuGet 包 Microsoft.CodeAnalysis.Analyzers 和 Microsoft.CodeAnalysis.CSharp
```xml
	<ItemGroup>
		<PackageReference Include="Microsoft.CodeAnalysis.Analyzers" Version="3.3.4" PrivateAssets="all" />
		<PackageReference Include="Microsoft.CodeAnalysis.CSharp" Version="4.7.0" PrivateAssets="all" />
	</ItemGroup>
```
- 引用生成器
```xml
<ItemGroup>
    <ProjectReference Include="..\PathTo\SourceGenerator.csproj"
                      OutputItemType="Analyzer"
                      ReferenceOutputAssembly="false" />
</ItemGroup>
```




[源生成器 - C# | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/csharp/roslyn-sdk/source-generators-overview)