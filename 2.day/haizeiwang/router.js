var controller = require('./controller');
var querystring = require('querystring');
var fs = require('fs');


module.exports = {
    start: function (server) {
        server.on('request', function (req, res) {
            //    = req.url;
            var url_ = req.url;
            var url = require('url');
            var urls = url.parse(req.url, true);

            if (req.method == 'GET') {
                if (urls.pathname == '/') {

                    controller.index(req, res);
                } else if (urls.pathname == '/getone') {
                    // console.log(123);
                    controller.getone(req, res, urls.query.id)
                } else if (urls.pathname == '/delete') {
                    controller.delete(req, res, urls.query.id)
                } else if (urls.pathname == '/edit') {
                    controller.editshow(req, res, urls.query.id)
                } else if (urls.pathname == '/add') {
                    controller.add2(req, res)
                }

                else {
                    fs.readFile('.' + url_, function (err, data) {
                        res.end(data);
                    })

                }
            } else if (req.method == 'POST') {
                if (urls.pathname == '/edit') {
                    var formidable = require('formidable')
                    var fd = new formidable.IncomingForm();
                    fd.uploadDir="D:\\tmp\\img";
                    fd.parse(req,function(err,formd,files){
                        var imgpath = './public/img/'+files.img.name;
                        fs.rename(files.img.path,imgpath,function(err){
                            if(!err){
                                formd.img = imgpath;
                                controller.add(req, res, urls.query.id,formd)
                            }
                        });
                    })
                }else if(urls.pathname == '/add'){
                    var formidable = require('formidable');
                    var fd = new formidable.IncomingForm();
                    fd.uploadDir="D:\\tmp\\img";
                    fd.parse(req,function(err,formd,files){
                        var imgpath = './public/img/'+files.img.name;
                        fs.rename(files.img.path,imgpath,function(err){
                            if(!err){
                                formd.img = imgpath;
                                controller.tianjia(req, res, formd);
                            }
                        })
                    })




                    // var str = '';
                    // req.on('data', function (data) {
                    //     str += data;
                    // });
                    // req.on('end', function () {
                    //     var POST = querystring.parse(str);
                    //     // console.log(POST);
                    //     controller.tianjia(req, res, POST);
                    // })
                }
            }

        })
    }
}