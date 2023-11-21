# 删除AMD显卡桌面右键菜单选项



下面方法会导致其他右键菜单也消失

![桌面右键菜单](https://raw.githubusercontent.com/Zhao-Ye/ImageHostingService/master/AMD%E6%98%BE%E5%8D%A1%E6%A1%8C%E9%9D%A2%E5%8F%B3%E9%94%AE%E8%8F%9C%E5%8D%95.png)
打开注册表
找到如下路径(其中版本号可能有变化)

Computer\HKEY_CLASSES_ROOT\PackagedCom\Package\AdvancedMicroDevicesInc-2.AMDRadeonSoftware_10.22.40043.0_x64__0a9344xs7nr4m\Server\0

![注册表路径](https://raw.githubusercontent.com/Zhao-Ye/ImageHostingService/master/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20231120093413.png)
清空 ApplicationId 值