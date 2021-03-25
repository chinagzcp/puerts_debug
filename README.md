# puerts_debug

在多线程中, 每个线程创建各自的JsEnv实例(此处为主线程和一条子线程).

执行一段代码后并等待几分钟, 其后主线程调用C# Api出现异常

## 错误信息
![error](./pic/error.png)


## 关键代码
![code](./pic/code.png)

## 其他
好像必需执行以下两处代码才会出现上述问题:(如果任意注释掉一处, 上述问题短时间内未复现)

主线程代码

![code](./pic/code_1.png)

子线程代码

![code](./pic/code_2.png)
