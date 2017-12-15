"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
// import * as favicon from 'serve-favicon'
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const connectRedis = require("connect-redis");
const redis_service_1 = require("./services/redis-service");
const index_1 = require("./routes/index");
const user_1 = require("./routes/user");
const courseClassify_1 = require("./routes/courseClassify");
const courseColumn_1 = require("./routes/courseColumn");
// import courseAudio from './routes/courseAudio'
const courseVideo_1 = require("./routes/courseVideo");
const courseText_1 = require("./routes/courseText");
const banner_1 = require("./routes/banner");
// import * as history from 'connect-history-api-fallback'
require("./services/mongoose-service");
var app = express();
const RedisStore = connectRedis(session);
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
app.use(session({
    store: new RedisStore({ client: redis_service_1.default, logErrors: true }),
    // store: new RedisStore({ client: redisClient }),
    secret: 'aiweixueyuan',
    name: 'wid',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        secure: false
    }
}));
app.use('*', function (req, res, next) {
    // console.log('--------------------')
    // console.log(req.session)
    next();
});
app.use('/', index_1.default);
app.use('/user', user_1.default);
app.use('/classify', courseClassify_1.default);
app.use('/column', courseColumn_1.default);
// app.use('/audio', courseAudio)
app.use('/video', courseVideo_1.default);
app.use('/text', courseText_1.default);
app.use('/banner', banner_1.default);
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
exports.default = app;
