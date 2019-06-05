 var fs = require('fs');
//exports 数据导出
module.exports = {
    //定义了start方法
    start:function(server){
        //绑定onrequest  传入request 
        server.on('request',function(req,res){
            //确定每一次=访问的方法
            var urls = req.url;
            //判断是get还是post
            if(req.method=='GET'){
                //如果访问的是 ‘/’ ,
                if(urls == '/'){
                    //引入控制器
                    var controller = require('./controller');
                    //调用控制器里面的方法
                    var data = controller.html_data;
                    res.end(data);

                }else{
                    fs.readFile(''+urls,function(error,data){
                        res.end(data);
                 });  
                }
            }else if(req.method == 'POST'){

            }
        })
    }
}