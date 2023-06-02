// expres-session 모듈 사용

let express = require('express');
let path = require('path');
let http = require('http');
let static = require('serve-static');

let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');

let expressSession = require('express-session');

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

app.use(expressSession({
    secret : 'my key',
    resave:true,
    saveUninitialized:true
}))

var router = express.Router();

router.route('/process/login').post((req, res)=> {
    console.log('/process/login 호출됨.');

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    if(req.session.user) {
        // 이미 로그인된 상태
        console.log('이미 로그인되어 상품페이지로 이동합니다.');

        res.redirect('/public/product.html');
    }
    else {
        // 세션 저장
        req.session.user = {
            id:paramId,
            name:'소녀시대',
            authorized:true
        }
        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('<h1>로그인 성공</h1>');
        res.write('<div><p>Param id : ' + paramId + '</p></div>');
        res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
        res.write("<br><br><button type='button'><a href='/process/product'>상품 페이지로 이동하기</a></button>");
        res.end();
    }
});

router.route('/process/logout').get((req, res)=> {
    console.log('/process/logout 호출됨.');

    if(req.session.user) {
        console.log('로그아웃합니다.');

        req.session.destroy((err)=> {
            if(err) {throw err;}

            console.log('세션을 삭제하고 로그아웃되었습니다.');
            res.redirect('/public/login2.html');
        });
    }
    else {
        // 로그인 안 된 상태
        console.log('아직 로그인되어 있지 않습니다.');
        res.redirect('/public/login2.html');
    }
})

router.route('/process/product').get((req, res)=> {
    console.log('/process/product 호출됨');
    if(req.session.user) {
        res.redirect('/public/product.html');
    }
    else {
        res.redirect('/public/login2.html');
    }
});

app.use('/', router);

app.all('*', function(req, res) {
    res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다. </h1>');
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
})