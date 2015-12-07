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
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      //var vm = this;
    }
  }

})();
