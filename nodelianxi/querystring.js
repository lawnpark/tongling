var http=require("http");
var querystring=require("querystring");
var url = require("url");
var server = http.createServer(function(req,res){
	var query=url.parse(req.url);
	var queryObject=querystring.parse(query);//将字符串（查询部分）转为对象
	console.log(queryObject);
	res.end();
});
server.listen(3000,"127.0.0.1");