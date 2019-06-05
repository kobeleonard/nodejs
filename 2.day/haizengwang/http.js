//引入http
//http模块负责服务器创建以及启动
var http = require('http');
//启动server
var server = http.createServer();
//监听端口号 并且访问
server.listen(7575,function(){
    console.log('启动成功');
})
//引入 router
var router = require('./router');
//调用router里面的方法
router.start(server);