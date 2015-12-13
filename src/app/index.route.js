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
      .state('work', {
        url: '/work/{case_study}',
        templateUrl: function($stateParams) {
          return '/app/components/case-studies/' + $stateParams.case_study + '.html';
        },
        controller: 'CaseStudyController',
        controllerAs: 'case_study'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
