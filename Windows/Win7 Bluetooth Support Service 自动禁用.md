win7 Bluetooth Support Service 自动禁用,手动设置不起作用，导致蓝牙无法使用
可用如下注册表修复
```reg
Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\bthserv]
"DisplayName"="@%SystemRoot%\\System32\\bthserv.dll,-101"
"ErrorControl"=dword:00000001
"ImagePath"=hex(2):25,00,53,00,79,00,73,00,74,00,65,00,6d,00,52,00,6f,00,6f,00,74,00,25,00,5c,00,73,00,79,00,73,00,74,00,65,00,6d,00,33,00,32,00,5c,00,73,00,76,00,63,00,68,00,6f,00,73,00,74,00,2e,00,65,00,78,00,65,00,20,00,2d,00,6b,00,20,00,62,00,74,00,68,00,73,00,76,00,63,00,73,00,00,00
"Start"=dword:00000003
"Type"=dword:00000020
"Description"="@%SystemRoot%\\System32\\bthserv.dll,-102"
"DependOnService"=hex(7):52,00,70,00,63,00,53,00,73,00,00,00,00,00
"ObjectName"="NT AUTHORITY\\LocalService"
"ServiceSidType"=dword:00000001
"RequiredPrivileges"=hex(7):53,00,65,00,43,00,68,00,61,00,6e,00,67,00,65,00,4e,00,6f,00,74,00,69,00,66,00,79,00,50,00,72,00,69,00,76,00,69,00,6c,00,65,00,67,00,65,00,00,00,53,00,65,00,43,00,72,00,65,00,61,00,74,00,65,00,47,00,6c,00,6f,00,62,00,61,00,6c,00,50,00,72,00,69,00,76,00,69,00,6c,00,65,00,67,00,65,00,00,00,53,00,65,00,49,00,6d,00,70,00,65,00,72,00,73,00,6f,00,6e,00,61,00,74,00,65,00,50,00,72,00,69,00,76,00,69,00,6c,00,65,00,67,00,65,00,00,00,00,00
"FailureActions"=hex:84,03,00,00,00,00,00,00,00,00,00,00,03,00,00,00,14,00,00,00,01,00,00,00,c0,d4,01,00,01,00,00,00,e0,93,04,00,00,00,00,00,00,00,00,00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\bthserv\Parameters]
"ServiceDllUnloadOnStop"=dword:00000001
"ServiceDll"=hex(2):25,00,53,00,79,00,73,00,74,00,65,00,6d,00,52,00,6f,00,6f,00,74,00,25,00,5c,00,73,00,79,00,73,00,74,00,65,00,6d,00,33,00,32,00,5c,00,62,00,74,00,68,00,73,00,65,00,72,00,76,00,2e,00,64,00,6c,00,6c,00,00,00
"ChannelAvoidanceRange"=dword:00000014

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\bthserv\Parameters\BluetoothControlPanelTasks]
"State"=dword:00000001

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\bthserv\TriggerInfo]

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\bthserv\TriggerInfo\0]
"Type"=dword:00000001
"Action"=dword:00000001
"GUID"=hex:2a,30,50,08,44,b3,da,4f,9b,e9,90,57,6b,8d,46,f0
```
