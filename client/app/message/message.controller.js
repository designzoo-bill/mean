'use strict';

angular.module('meanApp')
  .controller('MessageCtrl', function ($scope, $http, socket) {

    $scope.messages = [];

    $http.get('/api/messages').success(function(messages) {
      $scope.messages = messages;
      socket.syncUpdates('message', $scope.messages);
    });

    $scope.addMessage = function() {
      if($scope.newMessage === '') {
        return;
      }
      $http.post('/api/messages', { name: $scope.newMessage });
      $scope.newMessage = '';
    };

    $scope.deleteMessage = function(message) {
      $http.delete('/api/messages/' + message._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('message');
    });
  });
