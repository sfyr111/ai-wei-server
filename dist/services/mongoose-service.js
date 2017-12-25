"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
// const uri = 'mongodb://localhost:27017/ai-wei'
var uri = 'mongodb://bf:Vrv12345012345bf@61.147.125.59:30000,61.147.125.60:30000,61.147.125.61:30000/VRVWebMonitorBF';
/* tslint:disable */
mongoose.Promise = global.Promise;
/* tslint:enable */
mongoose.connect(uri, { useMongoClient: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('mongo connect!');
});
exports["default"] = db;
