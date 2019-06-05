
//引入数据库
var mysql = require('mysql');
//连接数据库信息
var conn=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password: '0925',
    database:'73haizengwang'                                                
})
//开启链接
conn.connect();
exports.query = function(callback){
    conn.query('select * from users',function(err,data){
        callback(data);
    });

    conn.end();
}



// exports.del = function(callback){

//     conn.query(''){

//     }
// }



// //导出数据
// module.exports = {
//     //定义有一个cha方法
//     cha:function(c){
//         //执行sql语句  设置回调函数
//         conn.query('select * from users',function(err,data){
//             if(err){
//                 console.log(err);
//             } else{
//                 c(data);
//             }
//         })
//     }
// }

