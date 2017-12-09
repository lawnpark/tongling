var http=require("http");
// var url=require("url");
var server=http.createServer(function(req,res){
	res.writeHead(200,{"content-type":"text/html;charset=UTF-8"});
	console.log(req.url);
	res.end("haha");
});
server.listen(3000,"127.0.0.1");