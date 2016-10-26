var port = 8080;	//端口
var http = require('http');			//require是ES6中的特性，目的是引入一个模块


http.createServer(function(request,response){
	//request   请求
	//response	响应
	response
	.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	response.write("<h1>服务正在运行，这段内容是一2222张网页</h1>");
	response.end();			//结束响应，并将内容向浏览器端传递
}).listen(port);

console.log("服务器正在运行......");
