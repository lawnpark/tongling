var http = require("http");
var url = require("url");
//var querystring=require("querystring");
var server = http.createServer(function(req,res){
	res.writeHead(200,{"content-type":"text/html;charset=UTF-8"});
	console.log(req.url);//得到完整的url:/123?id=wet&name=xm&age=19
	//url.parse可以将一个完整的url地址分为很多部分
	//host(主机名)、port(端口号)、pathname(文件名，文件路径，不包括问号后面的)、path(完整的路径，包括问好后面的)
	var pathname=url.parse(req.url).pathname;//
	var query=url.parse(req.url).query;
	var path=url.parse(req.url).path;
	//var queryObj=querystring.parse(query);
	console.log(pathname);//pathname: /123
	console.log(query);//query:id=wet&name=xm&age=19;问号后面部分，得到的是字符串
	console.log(path);//123?id=wet&name=xm&age=19
	//console.log(queryObj);
	var query=url.parse(req.url,true).query;//传入一个参数true，将字符串转换成对象
	//如果url.parse()第二个参数为true的话，那么就可以将所有的查询变为对象即问号后面的部分
	//那么就可以直接打点得到对象（以前版本：var querystring=require("querystring");var queryObject=querystring.parse(query);
	console.log(query);//{id:'wet',name:'xm',age:'19'}得到的是对象
	console.log(query.name);// xm;可以得到具体的
	console.log(query.age);// 19;

	res.end();
});
server.listen(3000,"127.0.0.1");