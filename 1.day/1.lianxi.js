var rr = require('fs');
rr.writeFile('./c.txt','kobe',function(err){
    console.log(err);
})