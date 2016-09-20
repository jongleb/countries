(function () {
    'use strict';

    angular
        .module('app.countries')
        .config(configureState);

    function configureState($stateProvider) {
        $stateProvider
            .state('countries', {
                parent: 'root',
                url: "/countries",
                views: {
                    "content@root": {
                        templateUrl: 'countries/templates/list-page.html',
                        controller: 'countriesListCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('country', {
                parent: 'root',
                url: "/country/{id}",
                views: {
                    "content@root": {
                        templateUrl: 'countries/templates/item-page.html',
                        controller: 'countriesDetailCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
    }

    configureState.$inject = ['$stateProvider'];

})();
