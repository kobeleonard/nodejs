var read =require('fs');
read.readFile('./c.txt','utf8',function(err,data){
    console.log(data);
    console.log(err);
    var cc = data+'bryant';
    read.writeFile('./c.txt',cc,function(err){
        console.log(err);
    })
})

