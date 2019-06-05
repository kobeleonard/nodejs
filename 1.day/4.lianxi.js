var fs = require('fs');
fs.readFile('./c.txt','utf8',function(data,err){
    // console.log(err);
    // console.log(data);
    data+='bryant';
    fs.writeFile('./c.txt',data,function(err,data){
        console.log(err);
        console.log(data);
    })


})






// fs.writeFile('./c.txt','kobe',function(err,data){
//     console.log(err);
//     console.log(data);
// })