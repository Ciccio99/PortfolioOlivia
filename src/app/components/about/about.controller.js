(function() {
    'use strict';

    angular
    .module('portfolioOlivia')
    .controller('AboutController', AboutController);

    /** @ngInject */
    function AboutController(ModelsService) {
        var vm = this;
        ModelsService.get("about")
            .success(function(data) {
                vm.about = data;
            })
            .error(function() {
                $log.error('Could not retrieve information about Olivia.');
            });
    }
})();
