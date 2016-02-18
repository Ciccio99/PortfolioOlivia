(function() {
    'use strict';

    angular
    .module('portfolioOlivia')
    .controller('CaseStudyController', CaseStudyController);

    /** @ngInject */
    function CaseStudyController($log, $stateParams, ModelsService) {
        var vm = this;
        vm.show_hover_1 = true;
        vm.show_hover_2 = false;
        vm.show_hover_3 = false;
        vm.show_hover_4 = true;
        vm.show_hover_5 = false;
        vm.switchHoverStatesTo2 = switchHoverStatesTo2;
        vm.switchHoverStatesTo3 = switchHoverStatesTo3;
        vm.switchHoverStatesTo4 = switchHoverStatesTo4;
        vm.switchHoverStatesTo5 = switchHoverStatesTo5;

        ModelsService.get($stateParams.case_study)
            .success(function(data) {
                vm.case_study = data;
            })
            .error(function() {
                $log.error('Could not retrieve case study.');
            });

        function switchHoverStatesTo2() {
            if(!vm.show_hover_2 && !vm.show_hover_1) {
                vm.show_hover_2 = true;
                vm.show_hover_3 = false;
                vm.show_hover_1 = false;
            }
        }

        function switchHoverStatesTo3() {
            if(!vm.show_hover_3) {
                vm.show_hover_3 = true;
                vm.show_hover_1 = false;
                vm.show_hover_2 = false;
            }
        }

        function switchHoverStatesTo4() {
            if(!vm.show_hover_4) {
                vm.show_hover_4 = true;
                vm.show_hover_5 = false;
            }
        }

        function switchHoverStatesTo5() {
            if(!vm.show_hover_5) {
                vm.show_hover_5 = true;
                vm.show_hover_4 = false;
            }
        }
    }
})();
