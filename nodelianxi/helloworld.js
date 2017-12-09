var http = require("http");
var server = http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html;charset-UTF_8"});
    console.log("xixi");
    res.end("haha,this is my first page");
    
});
server.listen(3000,"127.0.0.1");