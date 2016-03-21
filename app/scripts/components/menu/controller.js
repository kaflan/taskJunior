(function() {
'use strict';

    angular
        .module('junior')
        .controller('MenuCtrl', ControllerController);
    function ControllerController() {
        var vm = this;
          vm.title = 'Hello @admin';
        console.log(vm.title);
        vm.todos = [];
        activate();

        function activate() { }
    }
})();
