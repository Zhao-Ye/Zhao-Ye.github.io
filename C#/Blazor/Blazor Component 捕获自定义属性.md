
在调用封装的 Component 时如果添加原始html属性会抛出如下异常

``` html
<Row style="background:red;">
```
``` text
InvalidOperationException: Object of type ' ' does not have a property matching the name 'style'.
```

解决方法添加一个 Parameter , 并设置 ParameterAttribute 属性 CaptureUnmatchedValues 值为 true。

``` C#
    /// <summary>
    /// 未匹配 Parameter
    /// </summary>
    [Parameter(CaptureUnmatchedValues = true)]
    public IDictionary<string, object> UnmatchedAttributes { get; set; } = new Dictionary<string, object>();
```

这样会捕获所有不能匹配 Parameter 的自定义属性

