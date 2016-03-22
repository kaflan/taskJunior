(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name controller
   * @module module
   * @description
   *
   * The `controller` controller description.
   *
   */
  angular
    .module('junior')
    .controller('TabCtrl', AppCtrl);



  function AppCtrl($scope, GetUsers) {

    $scope.user = {
      name: '@admin',
      comment: '',
      avatar: 'http://loremflickr.com/250/250'
    };
    $scope.tabs = [{
      title: 'Comments',
      url: 'one.tpl.html'
    }, {
      title: 'Likes',
      url: 'two.tpl.html'
    }];
    $scope.currentTab = 'one.tpl.html';
    $scope.hideComment = true;
    $scope.button = false;
    $scope.onClickTab = function(tab) {
      $scope.currentTab = tab.url;
      $scope.hideComment = !$scope.hideComment;
    }
    $scope.isActiveTab = function(tabUrl) {
      return tabUrl == $scope.currentTab;
    }
    $scope.likes = function() {
      $scope.mylike = !$scope.mylike;
    };
    $scope.commentHide = function(){
      $scope.button = !$scope.button;
    };
    $scope.postAdd = function(users){
      users.push($scope.user);
    };
    GetUsers.getData(function(res) {
      $scope.users = [];
      var users = res[0];
      for (var k in users) {
        if (typeof users[k] !== 'function') {
          $scope.users.push(users[k]);
        }
      }
      console.log($scope.users);
    });
    $scope.deletePost = function(index, user){
      console.log(index, user);
      user.splice(index, 1);
      // $scope.user.comments.splice(index, 1);
    }
  }


})();
