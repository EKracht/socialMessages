'use strict';

let app = angular.module('socialLogin', ['satellizer', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', { url: '/', templateUrl: 'partials/home.html', controller: 'homeCtrl'})
    .state('login', { url: '/login', templateUrl: 'partials/login.html', controller: 'loginCtrl'})    
    .state('profile', { url: '/profile', templateUrl: 'partials/profile.html', controller: 'profileCtrl'})
    .state('usersList', { url: '/usersList', templateUrl: 'partials/usersList.html', controller: 'usersListCtrl'})
    .state('chatRoom', { url: '/chatRoom', templateUrl: 'partials/chatRoom.html', controller: 'chatRoomCtrl'})

    $authProvider.github({
      clientId: 'ba429ea191029e0d945d'
    });

    $authProvider.google({
      clientId: '1015726059118-boo8a9bjqla7llgqa6o0o90qr7sjfcv8.apps.googleusercontent.com'
    });    

    $authProvider.linkedin({
      clientId: '753zlqpr82n02c'
    });    

    $authProvider.twitter({
      // clientId: 'OfOfVIqyN4tYtp4f8pJSMHc2s'
    });    

    // $authProvider.live({
    //   clientId: '000000004C173138'
    // });
});
