(function() {
    'use strict';

    angular
    .module('portfolioOlivia')
    .controller('MainController', ['$scope', 'ModelsService', MainController]);

    /** @ngInject */
    function MainController($scope, ModelsService) {
        ModelsService.get()
            .success(function(data) {
                $scope.project = data;
            })
            .error(function() {
                console.log('Could not retrieve case studies list.');
            });
    }
})();
