(function() {
    'use strict';

    angular
        .module('portfolioOlivia')
        .service('ModelsService', ModelsService);

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
