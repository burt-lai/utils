- 1.浏览器 发送随机数 random1 + 支持的加密算法列表 到服务器
- 2.服务器 发送随机数 random2 + 选择的加密算法 + 数字证书（公钥在证书里） + 确认信息
- 3.浏览器 验证证书有效性
- 4.浏览器 生成一个随机数 pre-master，采用非对称加密通过服务器的公钥加密发送给服务器，同时根据加密算法将 random1 + random2 + pre-master 生成 master-secret 用于后续数据传输
- 5.服务器 用私钥解密得到 pre-master，根据算法将 random1 + random2 + pre-master 生成 master-secret 用于数据传输
- 6.对称加密，浏览器和服务器之间使用 master-secret 加密的数据进行通信