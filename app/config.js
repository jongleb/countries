(function () {
    'use strict';

    angular
        .module('app')
        .config(configState)
        .factory('httpInterceptor', httpInterceptor);

    function httpInterceptor($q, $injector) {
        return {
            'requestError': function (rejection) {
                return $q.reject(rejection);
            },
            'responseError': function (rejection) {
                if (rejection.status === 404) {
                   console.log('404(((')
                }
                return $q.reject(rejection);
            }
        };
    }

    httpInterceptor.$inject = ['$q', '$injector'];


    function configState($stateProvider,
                         $urlRouterProvider,
                         $compileProvider,
                         $sceDelegateProvider,
                         $locationProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/countries');

        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(blob):/);

        $sceDelegateProvider.resourceUrlWhitelist(['**']);

        // $locationProvider.html5Mode({
        //     enabled: true
        // });

        $httpProvider.interceptors.push('httpInterceptor');

        $stateProvider
            .state('root', {
                url: '?q',
                abstract: true,
                params: {
                    q: null
                },
                views: {
                    '@': {
                        templateUrl: 'layout/templates/layout.html',
                        controller: 'LayoutController',
                        controllerAs: 'vm'
                    }
                },
                sticky: true,
                deepStateRedirect: true
            })
            .state('404', {
                parent: 'root',
                url: "/404",
                views: {
                    "content@root": {
                        templateUrl: 'layout/templates/404.html'
                    }
                }
            })
    }

    configState.$inject = ['$stateProvider',
        '$urlRouterProvider',
        '$compileProvider',
        '$sceDelegateProvider',
        '$locationProvider', '$httpProvider'];

})();
