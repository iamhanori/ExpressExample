var http = require('http');

// 웹 서버 객체 만들기
var server = http.createServer();

// 웹 서버 시작하여 3000번 포트에서 대기
var host = '10.96.124.24';
var port = 3000;

server.listen(port, host, '50000' function() {
    console.log('web server start.' + host +':'+ port);
});


