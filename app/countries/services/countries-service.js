(function () {
    'use strict';

    angular.module('app.countries')
        .factory('countriesDataService', countriesDataService);


    function countriesDataService(repository) {

        var data = {
                list: [],
                load: false,
                init: false
            }, allList = [],
            perPage = 10,
            currentPage = 0;

        function getAllCountries() {
            if (!data.init) {
                data.load = true;
                repository.getAllCountries()
                    .then(dataLoaded)
            }
            return data;
        }

        function getRegionCountries(region) {
            repository.getByRegion(region)
                .then(dataLoaded);
            return data;
        }

        function dataLoaded(res) {
            angular.extend(data.list, res);
            angular.extend(allList, res);
            data.load = false;
        }

        return {
            getAllCountries: getAllCountries,
            startingItem: function () {
                return currentPage * perPage;
            },
            perPage: perPage,
            pageBack: function () {
                currentPage--;
            },
            pageForward: function () {
                currentPage++;
            },
            getDataOnly: function () {
                return data;
            },
            reloadListByRegion: getRegionCountries
        }
    }

    countriesDataService.$inject = ['countriesRepository'];
})();
