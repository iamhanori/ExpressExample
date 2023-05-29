// cookie parser 미들웨어 사용하기
// http://localhost:3000/process/setUserCookie -> http://localhost:3000/process/showCookie

let express = require('express');
let path = require('path');
let http = require('http');
let static = require('serve-static');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');

// 익스프레스 객체 생성
let app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }))

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

// app.use('/public', static(path.join(__dirname, 'public')));
app.use('/public', static(path.join(__dirname, 'public')));

var router = express.Router();
router.route('/process/users/:id').post(function (req, res) {
    console.log('/process/login 처리함.');

    var paramName = req.body.name || req.query.name;

    var paramId = req.params.id;
    var paramPassword = req.body.password || req.query.password;
    res.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param id : ' + paramId + '</p></div>');
    res.write('<div><p>Param name : ' + paramName + '</p></div>');
    res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
    res.write("<br><br><a href='/public/login2.html'>로그인 페이지로 돌아가기</a>");
    res.end();
});

app.use('/', router);

app.all('*', function (req, res) {
    res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다. </h1>');
});

app.use(cookieParser());

router.route('/process/setUserCookie').get(function (req, res) {
    console.log('/process/setUserCookie 호출됨.');
    // 쿠키 설정
    res.cookie('user', {
        id: 'sunny',
        name: '소녀시대',
        authorized: true
    });
    // redirect로 응답
    res.redirect('/process/showCookie');
});

router.route('/process/showCookie').get(function(req, res) {
    console.log('/process/showCookie 호출됨.');
    res.send(req.cookies);
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
})