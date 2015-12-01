'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var moment = require('moment');

var Message;

var messageSchema = Schema({
  thread: { type: Array },
  text: Array // push string (inside string has username + message)
});

Message = mongoose.model('Message', messageSchema);

module.exports = Message;