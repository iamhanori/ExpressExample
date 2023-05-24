// 0517 app.use('/', static(path.join(__dirname, 'public'))); 수정

// 모듈 설치
var express = require('express');
var http = require('http');
var static = require('serve-static');

var path = require('path');
var bodyParser = require('body-parser');

// express 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended:false}));

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

app.use('/', static(path.join(__dirname, 'public')));
// app.use(static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    console.log('첫번째 미들웨어에서 요청을 처리함.');

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead('200', {'Content-Type':'text/html; charset=utf8'});
    res.write('<h2>Express 서버에서 응답한 결과입니다. </h2>');
    res.write('<div<p>Param Id :'+ paramId + '</p></div>');
    res.write('<div<p>Param Password :'+ paramPassword + '</p></div>');
    res.end();

});


// expres server 시작
// http://localhost:3000?id=test&password=1234
// http://localhost:3000/public/image/girl.png
// http://localhost:3000/public/styleheets/style.css
http.createServer(app).listen(3000, function() {
    console.log('express server start. : 3000');
});