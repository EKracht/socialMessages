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
      console.log('data:', data);
      $scope.thread = data;
    }, function(err){
      console.log(err);
    });
  };

});

