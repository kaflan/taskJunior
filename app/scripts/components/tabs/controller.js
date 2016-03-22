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
      comment: ''
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
   $scope.onClickTab = function (tab) {
       $scope.currentTab = tab.url;
       $scope.hideComment = !$scope.hideComment;
   }
   $scope.isActiveTab = function(tabUrl) {
       return tabUrl == $scope.currentTab;
   }
   $scope.likes = function(){
     $scope.like = !$scope.like;
   };
   console.log(GetUsers.getData(function(data){
     console.log(data);
   }));
  }


})();
