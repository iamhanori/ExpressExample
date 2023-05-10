// 익스프레스를 사용한 가장 단순한 샘플

// express 기본 모듈 불러오기
var express = require('express');
var http = require('http');

// express 객체 생성
var app = express();

// 기본 port를 app객체에 속성으로 설정
app.set('port', process.env.PORT || 3000);

// expres server 시작
http.createServer(app).listen(app.get('port'), function() {
    console.log('express server start :' + app.get('port'));
})