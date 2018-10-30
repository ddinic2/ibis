
    'use strict';

    angular
        .module('Ibis')
        .config(routeFn);

    routeFn.$inject = ['$routeProvider'];

    function routeFn($routeProvider) {
        $routeProvider

            .when('/search-reports',
                {
                    controller : 'ReportSearch',
                    templateUrl : 'pages/search/report-search.html'
                })
            .otherwise({redirectTo: '/search-reports'});
    }
