'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var jwt = require('jwt-simple');
// var moment = require('moment');

var Message;

var messageSchema = Schema({
  thread: { type: Array },
  text: Array // push string (inside string has username + message)
});

// messageSchema.methods.createJWT = function() {
//   var payload = {
//     sub: this._id,
//     iat: moment().unix(),
//     exp: moment().add(1, 'days').unix()
//   };
//   return jwt.encode(payload, process.env.JWT_SECRET);
// };


Message = mongoose.model('Message', messageSchema);

module.exports = Message;