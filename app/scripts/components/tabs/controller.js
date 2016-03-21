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



  function AppCtrl($scope) {
    $scope.data = {
      selectedIndex: 0,
      secondLocked: true,
      secondLabel: "Item Two",
      bottom: false
    };
    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
  }


})();
