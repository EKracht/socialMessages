'use strict';

var express = require('express');
var router = express.Router();

var ensureAuthenticated = require('../config/ensureAuthenticated');
var User = require('../models/user');

// PAJAMAS

var pajamas = ['footie', 'batman', 'bunny'];

router.use(ensureAuthenticated);

router.get('/', function(req, res) {
  console.log('req.user:', req.user);
  User.findById(req.user, function(err, user){

  });
  res.send(pajamas);
});

module.exports = router;
