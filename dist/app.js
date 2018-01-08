"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
// import * as favicon from 'serve-favicon'
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");
var connectRedis = require("connect-redis");
var index_1 = require("./routes/index");
var user_1 = require("./routes/user");
var courseClassify_1 = require("./routes/courseClassify");
var courseColumn_1 = require("./routes/courseColumn");
// import courseAudio from './routes/courseAudio'
var courseVideo_1 = require("./routes/courseVideo");
var courseText_1 = require("./routes/courseText");
var banner_1 = require("./routes/banner");
var statistics_1 = require("./routes/statistics");
// import * as history from 'connect-history-api-fallback'
require("./services/mongoose-service");
var app = express();
var RedisStore = connectRedis(session);
// const redisClient = redis.createClient(6379, '127.0.0.1')
// const redisClient = redis.createClient(7003, '61.147.124.74')
// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(history())
// app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({
//   store: new RedisStore({ client: iredisclient, logErrors: true }),
//   // store: new RedisStore({ client: redisClient }),
//   secret: 'aiweixueyuan',
//   name: 'wid',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     maxAge: 7 * 24 * 60 * 60 * 1000,
//     secure: false
//   }
// }))
app.use('*', function (req, res, next) {
    // console.log('--------------------')
    // console.log(req.session)
    next();
});
app.use('/', index_1["default"]);
app.use('/user', user_1["default"]);
app.use('/classify', courseClassify_1["default"]);
app.use('/column', courseColumn_1["default"]);
// app.use('/audio', courseAudio)
app.use('/video', courseVideo_1["default"]);
app.use('/text', courseText_1["default"]);
app.use('/banner', banner_1["default"]);
app.use('/statistics', statistics_1["default"]);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
exports["default"] = app;
