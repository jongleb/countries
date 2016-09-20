(function () {
    'use strict';

    angular
        .module('app.countries')
        .directive('countriesList', countriesList);

    function countriesList() {
        return {
            scope: {regionMode: '='},
            restrict: 'EA',
            templateUrl: 'countries/templates/list-directive.html',
            controller: countriesListCtrl,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    function countriesListCtrl(service) {
        var vm = this;

        vm.data = {};

        if (!vm.regionMode) {
            vm.data = service.getAllCountries();
        } else {
            vm.data = service.getDataOnly();
        }

        vm.startingItem = service.startingItem;
        vm.perPage = service.perPage;

    }

    countriesListCtrl.$inject = ['countriesDataService'];

})();
