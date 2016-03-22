(function() {
    // 'use strict';

    angular
      .module('junior')
      .factory('GetUsers', function($resource) {
        return $resource('database/users.json', {}, {
          getData: {
            method: 'GET',
            isArray: true
          }
        });
    });

      })();
