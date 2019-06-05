var template = require('art-template');
template.defaults.root = './';
var model = require('./model');

module.exports = {

}
model.query(function(data){
    var html_data = template('./view/index.html',{data:data});

    exports.html_data = html_data;

    // console.log(data);
})







//引入fs
// var fs = require('fs');
//导出数据  exports
// module.exports = {
//     //定义index方法
//     index:function(req,res){
//         //引入model
//         var model = require('./model');
//         model.cha(function(d){
//             console.log(d);
//             var html_data = template('./view/index.html',{})
//         })

//         fs.readFile('./view/index.html',function(err,data){
//             res.end(data);
//         })
//     }
// }