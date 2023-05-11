// 두 개의 미들웨어를 만들어 첫번째에서 두번째로 넘기기

// express 객체 생성
var express = require('express');
var http = require('http');
var app = express();

// 첫번째 미들웨어에서 다음 미들웨어로 넘김
app.use(function(req, res, next) {
    console.log('첫번째 미들웨어에서 요청을 처리함.');

    res.user = 'sunny';

    next();
});

// 두번째 미들웨어에서 응답 전송
app.use('/', function(req, res, next) {
    console.log('두번째 미들웨어에서 요청을 처리함.');

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.end('<h2>Express 서버에서 ' + req.user + '가 응답한 결과입니다. </h2>');
});


// expres server 시작
http.createServer(app).listen(3000, function() {
    console.log('express server start. : 3000');
});