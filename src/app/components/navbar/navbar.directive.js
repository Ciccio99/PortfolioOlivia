(function() {
  'use strict';

  angular
    .module('portfolioOlivia')
    .directive('mainNavbar', mainNavbar);

  /** @ngInject */
  function mainNavbar() {
    var directive = {
      restrict: 'AEC',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'nav',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($state) {
      var vm = this;
      vm.includes = function(name){
         return $state.includes(name);
      };
    }
  }

})();
