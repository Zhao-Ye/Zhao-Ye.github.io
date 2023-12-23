UserControl
```xaml
<Button Grid.Column="0" Content="解析授权码"
              Command="{Binding ReverseCalculateAuthorizationCodeCommand}"
              CommandParameter="{Binding RelativeSource={RelativeSource Mode=FindAncestor,AncestorType=local:SysCodeModel},Path=Model}"/>
```
```C#
  public static readonly DependencyProperty ModelProperty = DependencyProperty.Register(
    nameof(Model), typeof(BaseModel), typeof(SysCodeModel), new PropertyMetadata(default(BaseModel)));

  public BaseModel Model
  {
    get { return (BaseModel)GetValue(ModelProperty); }
    set { SetValue(ModelProperty, value); }
  }
```

Window
```xaml
    <c:SysCodeModel Model="{Binding EnvironmentalSelfInspectionProcessDataUpload}"/>
```
正确
```xaml
        <c:SysCodeModel Model="{Binding DataContext.EnvironmentalSelfInspectionProcessDataUpload,ElementName=w}"/>
```