(function() {
  'use strict';

  angular
    .module('portfolioOlivia')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/components/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .state('resume', {
        url: '/resume',
        templateUrl: 'app/components/resume/resume.html',
        controller: 'ResumeController',
        controllerAs: 'resume'
      })
      .state('sartorial', {
        url: '/sartorial',
        templateUrl: 'app/components/case-studies/sartorial/sartorial.html',
        controller: 'SartorialController',
        controllerAs: 'sartorial'
      })
      .state('tidal', {
        url: '/tidal',
        templateUrl: 'app/components/case-studies/tidal/tidal.html',
        controller: 'TidalController',
        controllerAs: 'tidal'
      })
      .state('concerto', {
        url: '/concerto',
        templateUrl: 'app/components/case-studies/concerto/concerto.html',
        controller: 'ConcertoController',
        controllerAs: 'concerto'
      })
      .state('misfit', {
        url: '/misfit',
        templateUrl: 'app/components/case-studies/misfit/misfit.html',
        controller: 'MisfitController',
        controllerAs: 'misfit'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
