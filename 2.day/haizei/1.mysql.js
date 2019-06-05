var mysql  = require('mysql');

var con = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : '0925',
    database : '73haizengwang'
});

con.connect();

var sql = 'select name from users';

con.query(sql,function(err,f1){
    console.log(err);
    console.log(f1);
    
})
con.end();