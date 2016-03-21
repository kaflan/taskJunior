(function() {
'use strict';

    angular
        .module('testJunior')
        .factory('Service', Service);

    
    function Service() {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() { }
    }
})();