'use strict';

angular.module('meanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('message', {
        url: '/message',
        templateUrl: 'app/message/message.html',
        controller: 'MessageCtrl'
      });
  });