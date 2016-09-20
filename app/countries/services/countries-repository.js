(function () {
    'use strict';

    angular.module('app.countries')
        .factory('countriesRepository', countriesRepository);


    function countriesRepository($http, api) {

        function getAllCountries() {
            return $http({
                url: api.URL + 'all',
                method: 'GET'
            }).then(function (data) {
                if (!data) {
                    return;
                }
                return data.data;
            })
        }

        function getCountryByCallingCode(callingCode) {
            return $http({
                url: api.URL + 'callingcode/' + callingCode,
                method: 'GET'
            }).then(function (data) {
                if (!data) {
                    return;
                }
                return data.data;
            })
        }

        function getByRegion(region) {
            return $http({
                url: api.URL + 'region/' + region,
                method: 'GET'
            }).then(function (data) {
                if (!data) {
                    return;
                }
                return data.data;
            })
        }

        return {
            getAllCountries: getAllCountries,
            getCountryByCallingCode: getCountryByCallingCode,
            getByRegion: getByRegion
        }
    }

    countriesRepository.$inject = ['$http', 'api'];
})();
