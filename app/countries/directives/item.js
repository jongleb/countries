(function () {
    'use strict';

    angular
        .module('app.countries')
        .directive('countriesItem', countriesItem);

    function countriesItem() {
        return {
            restrict: 'EA',
            templateUrl: 'countries/templates/item-directive.html',
            controller: countriesItemCtrl,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    function countriesItemCtrl($stateParams, countriesRepository, countriesDataService) {
        var vm = this;
        vm.item = {};

        countriesRepository.getCountryByCallingCode($stateParams.id)
            .then(function (data) {
                vm.item = data[0];
                countriesDataService.reloadListByRegion(vm.item.region);
            });
    }

    countriesItemCtrl.$inject = ['$stateParams', 'countriesRepository', 'countriesDataService'];

})();
