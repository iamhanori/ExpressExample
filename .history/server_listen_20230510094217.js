// 5장 웹 서버 만들기
// 클라이언트가 웹 서버로 요청할 때 이벤트 처리하기

var http = require('http');

// 웹 서버 객체 만들기
var server = http.createServer(function(req, res) {
    console.log('client request');
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
});

// 웹 서버 시작하여 3000번 포트에서 대기
var port = 3000;
server.listen(port, 
});

