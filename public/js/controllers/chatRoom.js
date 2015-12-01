'use strict';

angular.module('socialLogin')
.controller('chatRoomCtrl', function($scope, $auth, $http, $state, $rootScope) {
  if (!$auth.isAuthenticated()){
    return $state.go('home');
  }

  $scope.sendMessage = function(message){
    var currentUser = localStorage.satellizer_token;
    $http.get('/chatRoom', currentUser)
    .then(function(data){
      console.log(data);
      $scope.thread = data;
    }, function(err){
      console.log(err);
    });
    // console.log('$scope.usersChat:', $rootScope.usersChat);
    // console.log('message:', message);
  };
  // $http.get('/chatRoom')    
  // .then(function(res){
  //   $scope.user = res.data;
  //   console.log('res:', res);
  // }, function(err){
  //   console.log(err);
  // });
});

