(function() {
    'use strict';

    angular
    .module('portfolioOlivia')
    .controller('CaseStudyController', CaseStudyController);

    /** @ngInject */
    function CaseStudyController($log, $stateParams, ModelsService) {
        var vm = this;
        ModelsService.get($stateParams.case_study)
            .success(function(data) {
                vm.case_study = data;
            })
            .error(function() {
                $log.error('Could not retrieve case study.');
            });
    }
})();
