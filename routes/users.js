'use strict';

var express = require('express');
var router = express.Router();

var ensureAuthenticated = require('../config/ensureAuthenticated');
var User = require('../models/user');

// USERS

// router.use(ensureAuthenticated);

router.get('/me', ensureAuthenticated, function(req, res){
  User.findById(req.user, function(err, user){
    console.log('user in users:', user);
    res.send({
      displayName: user.displayName,
      picture: user.picture
    });
  })
});

router.get('/usersList', function(req, res){
  User.find({}, function(err, users){
    console.log('all users:', users);
    res.send(users);
  })
});

module.exports = router;
