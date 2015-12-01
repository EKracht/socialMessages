'use strict';

angular.module('socialLogin')
.controller('usersListCtrl', function($scope, $auth, $http, $state, $rootScope) {
  $http.get('/users/usersList')    
  .then(function(res){
    $scope.users = res.data;
    console.log('res:', res);
  }, function(err){
    console.log(err);
  });

  $scope.toChatRoom = function(user){
    console.log('user:', user);
    console.log('button works');

    var peopleChat = {};
    peopleChat.currentUser = localStorage.satellizer_token;
    peopleChat.clickedUser = user;
    
    $http.post('/chatRoom', peopleChat)    
    .then(function(res){
      $state.go('chatRoom');
      console.log('res:', res);
    }, function(err){
      console.log(err);
    });

    
  };
});