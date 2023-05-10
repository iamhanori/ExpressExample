// 5장 웹 서버 만들기
// 클라이언트가 웹 서버로 요청할 때 이벤트 처리하기

var http = require('http');

// 웹 서버 객체 만들기
var server = http.createServer();

// 웹 서버 시작하여 3000번 포트에서 대기
var port = 3000;
server.listen(port, function() {
    console.log('web server start. : %d', port);
});

// 클라이언트 연결 이벤트 처리
server.on('connection', function(socket) {
    console.log('client connect. : %s, %d', socket.remoteAddress, socket.remotePort);
});

// 클라이언트 요청 이벤트 처리
server.on('request', function(req, res) {
    console.log('client');
    console.dir(req);
});

// 서버 종료 이벤트 처리
server.on('close', function() {
    console.log('server close');
});

