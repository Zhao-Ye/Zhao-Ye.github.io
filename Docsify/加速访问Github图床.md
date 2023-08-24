由于国内访问GitHub过慢/无法访问，所以在使用Github作为图床时需要对图片Url进行处理
可用如下方法进行统一处理
```javascript
      plugins: [
        function (hook, vm) {
          hook.beforeEach(function (content) {
            // 每次开始解析 Markdown 内容时调用
            // 替换 raw.githubusercontent.com ,解决 github 访问慢无法访问的问题 ,空格是为了防止被替换，使用时删除
            content = content.replaceAll('https://   raw.githubusercontent.com/Zhao-Ye/ImageHostingService/master/','https://cdn.jsdelivr.net/gh/Zhao-Ye/ImageHostingService/');
            return content;
          });
        }
      ]
```