#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
var debug = require('debug')('express-typescript:server');
var http = require('http');
const OAuth = require("wechat-oauth");
const APP_ID = process.env.NODE_ENV !== 'production' ? 'wx78dfb7976e77c436' : 'wx1a679722114b6a84';
const APP_SECRET = process.env.NODE_ENV !== 'production' ? '1a55760202297f214c23a5dd9514646e' : '41a839d5d19753a8032b86a33c87b8e8';
const wechatClient = new OAuth(APP_ID, APP_SECRET);
const url = process.env.NODE_ENV !== 'production' ? 'http://mpsanqian.free.ngrok.cc' : 'http://www.ai-union.com';
const clientUrl = wechatClient.getAuthorizeURL(url, '123', 'snsapi_base');
/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '3000');
app_1.default.set('port', port);
/**
 * Create HTTP server.
 */
var server = http.createServer(app_1.default);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
console.log('listening: ' + port);
console.log(clientUrl);
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
