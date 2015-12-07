(function() {
    'use strict';

    angular
    .module('portfolioOlivia')
    .controller('MainController', MainController);

    /** @ngInject */
    function MainController($log, ModelsService) {
        var vm = this;
        ModelsService.get()
            .success(function(data) {
                vm.case_studies = data;
            })
            .error(function() {
                $log.debug('Could not retrieve case studies list.');
            });
    }
})();
