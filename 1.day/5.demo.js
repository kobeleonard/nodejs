var http = require('http');
var server = http.createServer();

server.listen(2033);
server.on('request',function(request,response){



    if(request.method == 'GET'){
        response.setHeader('Content-Type','text/html;charset=utf-8');
        response.write("<h1>我喜欢你，像风走了八万里，不问归期</h1>");
    }
   
    response.end();
});