// 익스프레스를 사용한 가장 단순한 샘플

// express 기본 모듈 불러오기
var express = require('express'),
http = require('http');

// express 객체 생성
var app = express();

// 기본 port를 app객체에 속성으로 설정
app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함.');
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.end('<h1>express server에서 응답한 결과</h1>');
});

// expres server 시작
http.createServer(3000, function() {
    console.log('express server start. : 3000');
});