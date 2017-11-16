import * as express from 'express'
import * as path from 'path'
// import * as favicon from 'serve-favicon'
import * as logger from 'morgan'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
// import * as session from 'express-session'
import * as cors from 'cors'

import index from './routes/index'
import user from './routes/user'
import courseClassify from './routes/courseClassify'
import courseColumn from './routes/courseColumn'
import courseAudio from './routes/courseAudio'
import courseVideo from './routes/courseVideo'
import courseText from './routes/courseText'
import banner from './routes/banner'

// import * as history from 'connect-history-api-fallback'


import './services/mongoose-service'

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(history())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

// app.use(session({
//   secret: 'nice_to_meet_you',
//   cookie: {
//     maxAge: 60*1000,
//     secure: false
//   }
// }))

app.use('/', index)
app.use('/user', user)
app.use('/classify', courseClassify)
app.use('/column', courseColumn)
app.use('/audio', courseAudio)
app.use('/video', courseVideo)
app.use('/text', courseText)
app.use('/banner', banner)


// catch 404 and forward to error handler
app.use(function(req: any, res: any, next: any) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err: any, req: any, res: any, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
