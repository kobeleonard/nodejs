var http = require('http');
var router = require('./router');


var server = http.createServer();

server.listen('8585',function(){
    console.log('启动成功');
});
router.start(server);

