(function() {
    'use strict';

    angular
    .module('portfolioOlivia')
    .controller('SartorialController', SartorialController);

    /** @ngInject */
    function SartorialController($log, ModelsService) {
        var vm = this;
        ModelsService.get('sartorial')
            .success(function(data) {
                vm.case_study = data;
            })
            .error(function() {
                $log.debug('Could not retrieve case study.');
            });
    }
})();
