// 5장 웹 서버 만들기
// 클라이언트가 웹 서버로 요청할 때 이벤트 처리하기

var http = require('http');

// 웹 서버 객체 만들기
var server = http.createServer(function(req, res) {
    console.log('client request');
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    res.write('안녕하세요 김하늘입니다. : server_listen-1.js');
    res.end();
}).listen(8080);