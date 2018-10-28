
    'use strict';

    angular
        .module('PhoneBook')
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
