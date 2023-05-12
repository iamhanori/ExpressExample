// 0512 send() 메소드 사용해보기

// express 객체 생성
var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();

app.use(function(req, res, next) {

     
    // // 실습1  / JSON 객체 - 안 됨 
    // var person = {name:'정다운', age:29};
    // res.writeHead('200', {'Content-Type':'text/html; charset=utf8'});
    // res.end();

    // // 실습2 / 됨 
    // var person = {name:'정다운', age:29};
    // var personStr = JSON.stringify(person);
    // res.writeHead('200', {'Content-Type':'application/json; charset=utf8'});
    // res.end(personStr);

    // // 실습3 / 됨 (한글 깨짐) 
    // var person = {name:'정다운', age:29};
    // var personStr = JSON.stringify(person);
    // res.end(personStr);

    // // 실습4 / 됨 
    // var person = {name:'정다운', age:29};
    // var personStr = JSON.stringify(person);
    // res.writeHead('200', {'Content-Type':'text/html; charset=utf8'});
    // res.end(personStr);

    // // 실습5 / 됨 
    // var person = {name:'정다운', age:29};
    // var personStr = JSON.stringify(person);
    // res.send(personStr);

    // // 실습6 / 됨 
    // var person = {name:'정다운', age:29};
    // res.send(person);
    
    // // 실습7 / 됨 
    // req.user = 'ebaeg'
    // res.writeHead('200', {'Content-Type':'text/html; charset=utf8'});
    // res.end('<h2>Express 서버에서 ' + req.user + '를 res, writeHead와 end로 응답한 결과입니다. </h2>');

    // // 실습8 / 됨 
    // req.user = 'ebaeg'
    // res.send('<h2>Express 서버에서 ' + req.user + '를 send로 응답한 결과입니다. </h2>');

    // 실습9
    var filename = 'house.png';
    fs.readFile(filename, function(err, data) {
        res.send(data);
    });
});


// expres server 시작
http.createServer(app).listen(3000, function() {
    console.log('express server start. : 3000');
});