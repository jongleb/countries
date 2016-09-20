(function () {
    'use strict';
    angular.module('app.core')
        .filter('startFrom', function () {
            return function (input, start) {
                start = +start;
                return input.slice(start);
            }
        })
})();