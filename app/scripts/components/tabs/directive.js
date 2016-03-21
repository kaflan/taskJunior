(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name directive
     * @module module
     * @restrict EA
     * @description
     *
     * The `directive` directive description.
     *
     */
    angular
        .module('junior')
        .directive('myTabs', directive);

    function directive() {
        var directive = {
            restrict: 'E',
            templateUrl: 'templates/tabs.html',
            scope: {
            },
            // link: link,
            controller: 'TabCtrl',
            controllerAs: 'self',
            bindToController: true
        };

        return directive;

        ///////////

        function link(scope, el, attr, ctrl) {

        }
    }

})();
