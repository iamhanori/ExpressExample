// 0512 미들웨어에서 응답할 때 redirect 메소드 사용하기

// express 객체 생성
var express = require('express');
var http = require('http');
var app = express();

app.use(function(req, res, next) {
    console.log('첫번째 미들웨어에서 요청을 처리함.');

    // redirect : 웹 페이지 경로를 강제로 이동시킨다.
    res.redirect('http://google.co.kr');
});

// expres server 시작
http.createServer(app).listen(3000, function() {
    console.log('express server start. : 3000');
});