(function() {
'use strict';

    angular
        .module('testJunior')
        .controller('ControllerController', ControllerController);

    
    function ControllerController() {
        var vm = this;
        vm.title = 'My App Title';
        vm.todos = [];
        activate();
      for (var i = 0; i < 15; i++) {
    vm.todos.push({
      face: imagePath,
      what: "Brunch this weekend?",
      who: "Min Li Chan",
      notes: "I'll be in your neighborhood doing errands."
    });
      }

        function activate() { }
    }
})();