(function() {
    'use strict';

    angular
        .module('junior')
        .directive('myApp', Directive);

    function Directive() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: "MenuCtrl",
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            templateUrl: "templates/navbar.html",
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
})();
