var template = require('art-template');
var fs = require('fs');
var model = require('./model');
template.defaults.root = './';
module.exports ={
    getone:function(req,res,id){
        model.where('id='+id).selectall(function(data){
            // console.log(data);
            var htmls=template('./view/one.html',{data:data});
            res.end(htmls);
        });
    },

    index:function(req,res){
        model.selectall(function(data){
            var htmls=template('./view/index.html',{data:data});
            res.end(htmls);
        });
    },

    delete:function(req,res,id){
            model.where('id='+id).del(function(backdata){
                    if(backdata.affectedRows >=1){
                        res.setHeader('Content-type','text/html;charset=utf-8')
                        var s='<script>alert("删除成功");location.href="/"</script>';
                        res.end(s);
                    }
            })
    },

    editshow:function(req,res,id){
        model.where('id='+id).selectall(function(data){
            // res.end(data);
            var edit_html=template('./view/edit.html',{data:data});
            // console.log(data);
            res.end(edit_html);
        })

    },

    add:function(req,res,id,POST){
        model.where('id='+id).updata(POST,function(data){
            // callback(changedRows.toString);
                if(data!=''){
                    res.setHeader('Content-type','text/html;charset=utf-8')
                        var s='<script>alert("修改成功");location.href="/"</script>';
                        res.end(s);
                }
           
        })
    },

    add2:function(req,res){
         fs.readFile('./view/add.html',function(err,data){
            res.end(data);
         })
    },

    tianjia:function(req, res, POST){
        model.tianjia(POST,function(data){
            if(data!=''){
                res.setHeader('Content-type','text/html;charset=utf-8')
                
                var s='<script>alert("添加成功");location.href="/"</script>';  
            }
            res.end(s);
        })

        
    }
}