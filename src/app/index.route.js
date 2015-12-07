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
      });

    $urlRouterProvider.otherwise('/');
  }

})();
