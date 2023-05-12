// 0512 미들웨어에서 응답 전송할 때 send 메소드 사용하여 JSON 데이터 전송

// express 객체 생성
var express = require('express');
var http = require('http');
var app = express();

app.use(function(req, res, next) {
    console.log('첫번째 미들웨어에서 요청을 처리함.');

    var person = {name:'정다운', age:29};
    // res.send(person);

    var personStr = JSON.stringify(person);
    // res.send(personStr);

    res.writeHead('200', {'Content-Type':'application/json; charset=utf8'});
    res.write(personStr);
    res.end();
});

// expres server 시작
http.createServer(app).listen(3000, function() {
    console.log('express server start. : 3000');
});