// express-error-handler 미들웨어로 오류 페이지 보여주기

let express = require('express');
let path = require('path');
let http = require('http');
let static = require('serve-static');

let bodyParser = require('body-parser');
expressErrorHandler = require('express-error-handler')

// 익스프레스 객체 생성
let app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended:false}))

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());


// app.use('/public', static(path.join(__dirname, 'public')));
app.use('/public', static(path.join(__dirname, 'public')));

var router = express.Router();
router.route('/process/login').post(function(req, res) {
    console.log('/process/login 처리함.');
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param id : ' + paramId + '</p></div>');
    res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
    res.write("<br><br><a href='/public/login2.html'>로그인 페이지로 돌아가기</a>");
    res.end();
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
})

let errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);
app.use('/', router);