(function () {
    'use strict';

    angular
        .module('app.countries')
        .directive('countriesPagination', countriesPagination);

    function countriesPagination() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'countries/templates/pagination.html',
            controller: countriesPaginationCtrl,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    function countriesPaginationCtrl(service) {
        var vm = this;
        vm.pageBack = service.pageBack;
        vm.pageForward = service.pageForward;
    }

    countriesPaginationCtrl.$inject = ['countriesDataService'];

})();
