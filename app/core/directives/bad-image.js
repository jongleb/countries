(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('onErrorSrc', function () {
            return {
                link: function (scope, element, attrs) {
                    element.bind('error', function() {
                        if (attrs.src != attrs.onErrorSrc) {
                            console.log(attrs.onErrorSrc);
                            attrs.$set('src', attrs.onErrorSrc);
                        }
                    });
                }
            }
        });

})();
