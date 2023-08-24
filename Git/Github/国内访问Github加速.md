# Clone 加速
将网址中 https://github.com 替换如下：
- https://github.com.cnpmjs.org
- https://hub.fastgit.org
- https://gitclone.com/github.com

也可配置 git 自动替换
``` git
# 设置
$ git config --global url."https://hub.fastgit.org".insteadOf https://github.com
# 取消设置 
$ git config --global --unset url.https://github.com/.insteadof 
```

# Release 加速
将网址中 https://github.com 替换如下：
- https://download.fastgit.org
-  https://hub.fastgit.org

# raw.githubusercontent.com 加速
将网址中 https://raw.githubusercontent.com 替换如下：
- https://raw.staticdn.net(个人推荐)
- https://raw.fastgit.org
