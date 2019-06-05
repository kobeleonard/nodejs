var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '0925',
    database: '73haizengwang'
})

connection.connect();

module.exports = {
    // select: function(c){
    //     var sql = 'select * from users';
    //     connection.query(sql,function(err,data){
    //         c(data);
    //     })
    //     // connection.end();
    // },

    // getone:function(id,callback){
    //     connection.query('select * from users where id='+id,function(err,data){
    //         callback(data);
    //     })
    // },


    wh: '',
    where: function (wheres) {
        this.wh = wheres;
        return this;
    },


    selectall: function (callbackFun) {
        if (this.wh != '') {
            var sql = 'select * from users where ' + this.wh;
            this.wh = '';
        } else {
            var sql = 'select * from users';
        }
        // console.log(sql);
        connection.query(sql, function (err, data) {
            // console.log(data);
            callbackFun(data);
        })
    },


    del:function(callbackFun){
        if(this.wh != ''){
            var sql = 'delete from users where '+this.wh;
            this.wh = '';
            connection.query(sql,function(err,sqldata){
                callbackFun(sqldata)
            })
        }else{
            console.log()
        }
    },

    updata: function (POST, callback) {
        if (this.wh != '') {
            // console.log(POST);
            var str = '';
            for(aa in POST){
                // console.log(aa=POST[aa]);
                str += aa + '=' + '\'' + POST[aa] + '\'' + ','; 
            }
            str = str.substr(0,str.length-1)
            // console.log(str);
            var sql= 'update users set '+str+' where '+this.wh;
          
            this.wh = '';
            // console.log(sql);
            connection.query(sql, function (err,res, data) {
                // console.log(res);
                // callback(data);
                callback(res.changedRows);
            })
        }
    },



    tianjia:function(POST,callback){
        var str = '';
        var cc = '';
        for(aa in POST){

            // str += aa + '=' + '\'' + POST[aa] + '\'' + ',';
            // str = aa;
                // console.log(aa);

            cc += aa +',';
            str +='\''+POST[aa]+'\''+',';
            // console.log(aa);
        }
        str = str.substr(0,str.length-1)
        cc = cc.substr(0,cc.length-1)
        // console.log(cc);
        // console.log(str);
        var sql='insert into users('+cc+') values ('+str+')';
        // console.log(sql);
        connection.query(sql, function (err,res, data) {
            // console.log(res);
            // callback(data);
            callback(res.affectedRows);
        })
    }
}   