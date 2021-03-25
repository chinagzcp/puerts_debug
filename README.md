# puerts_debug

在多线程中, 创建线程各自的JsEnv实例.

执行一段代码后, 等待几分钟后主线程出现部分C# Api调用异常

## 错误信息
![error](./pic/error.png)


## 关键代码
![code](./pic/code.png)

## 其他
好像必需执行以下两处代码才会出现上述问题:(如果任意注释掉一处, 上述问题短时间内未复现)
[主线程代码]
![code](./pic/code_1.png)
[子线程代码]
![code](./pic/code_2.png)
