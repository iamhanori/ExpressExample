// 0512 헤더에 Accept와 Connection 추가

// express 객체 생성
var express = require('express');
var http = require('http');
var app = express();

app.use(function(req, res, next) {
    console.log('첫번째 미들웨어에서 요청을 처리함.');

    var userAgent = req.header('User-Agent');
    var Accept =  req.header('Accept');
    var Connection = req.header('Connection');
    var paramName = req.query.name;

    res.writeHead('200', {'Content-Type':'text/html; charset=utf8'});
    res.write('<h2>Express 서버에서 응답한 결과입니다. </h2>');
    res.write('<div<p>User-Agent : '+ userAgent + '</p></div>');
    res.write('<div<p>Accept : '+ Accept + '</p></div>');
    res.write('<div<p>Connection : '+ Connection + '</p></div>');
    res.write('<div<p>Param Name : '+ paramName + '</p></div>');

    res.end();
});

// expres server 시작
// http://localhost:3000/?name=sunny
http.createServer(app).listen(3000, function() {
    console.log('express server start. : 3000');
});