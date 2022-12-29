```C#
[HtmlTargetElement("Container")]  
public class ContainerTagHelper : TagHelper  
{  
 /// <summary>  
 /// 如果使用 BreakPoint 作为属性名，会出现问题  
 /// </summary>  
 public BreakPoints Break_Point { get; set; } = BreakPoints.None;  
 public TextHorizontalAlignments? Text_Horizontal_Alignment { get; set; }  
  
 public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)  
 {  
  output.TagName = "div";  
  output.Attributes.SetAttribute("class", ClassBuilder.Create()  
   .AddEnumClass(Break_Point, "container", "-{0}")  
   .AddWhen(Text_Horizontal_Alignment is not null,Text_Horizontal_Alignment)  
   .Build());  
  await Task.CompletedTask;  
 }  
}
```