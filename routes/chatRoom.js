'use strict';

var express = require('express');
var router = express.Router();

var ensureAuthenticated = require('../config/ensureAuthenticated');
var User = require('../models/user');
var Message = require('../models/message');
var jwt = require('jwt-simple');
var mongoose = require('mongoose');

// CHATROOM

router.use(ensureAuthenticated);

router.get('/', function(req, res){
  console.log(req.body);
;});

router.post('/', function(req, res){
  var currentUser = jwt.decode(req.body.currentUser, process.env.JWT_SECRET);
  var clickedUser = req.body.clickedUser;
  var usersArray = [];
  var usersObject = {};
  usersArray.push(clickedUser._id);
  usersArray.push(currentUser.sub);
  usersObject.thread = usersArray;
  console.log('usersObject:', usersObject);

  Message.findOne(currentUser, function(err, thread){
    if (err) return console.error(err);
    // console.log('thread:', thread);
    // if (!thread) {
    var message = new Message(usersObject);
    message.save(function(err, savedThread){
      if (err) return console.error(err);
      console.log(savedThread);
      res.send(savedThread);
    });
    // }
    // res.status(400).send('already in a thread');
  });


  //   .save(thread: )
  // console.log('currentUser:', currentUser);
  // console.log('clickedUser:', clickedUser);

  // console.log('req.user:', req.user);
  // User.findById(req.user, function(err, user){
  //   console.log('user:', user);
  //   res.send(user);
  // });
});

module.exports = router;
