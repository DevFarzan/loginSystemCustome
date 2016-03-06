
/*
 * GET home page.
 */


var mongoose = require('mongoose');
mongoose.connect('mongodb://farzan:farzi@ds019648.mlab.com:19648/loginsystem');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("db connected")
});