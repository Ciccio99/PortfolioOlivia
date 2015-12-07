(function() {
    'use strict';

    var portfolioOliviaServices = angular.module('portfolioOlivia');

    portfolioOliviaServices.service('ModelsService', ['$http', ModelsService]);

        function ModelsService($http) {
            this.get = function (id) {
                if(id) {
                    return $http.get('app/models/' + id + '.json');
                } else {
                    return $http.get('app/models/case-studies.json');
                }
            };
        }
})();
