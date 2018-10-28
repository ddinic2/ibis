'use strict'

angular
    .module('PhoneBook')
    /*.directive('contactDetails', fun)*/


    .directive('hcChart', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                options: '='
            },
            link: function (scope, element) {
                scope.$watch("options",  function (newValue, oldValue) {
                    Highcharts.chart(element[0], scope.options);
                });
            }
        };
    })

    .directive('hcChart1', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                options: '='
            },
            link: function (scope, element) {
                scope.$watch("options",  function (newValue, oldValue) {
                    Highcharts.chart(element[0], scope.options);
                });

            }
        };
    })
    // Directive for pie charts, pass in title and data only
    .directive('hcPieChart', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                title: '@',
                data: '='
            },
            link: function (scope, element) {

                scope.$watch("data",  function (newValue, oldValue) {
                    Highcharts.chart(element[0],  {
                        chart: {
                            type: 'pie'
                        },
                        title: {
                            text: scope.title
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            }
                        },
                        series: [{
                            data: scope.data
                        }]
                    });
                });
            }
        };
    })

    .directive('pieWithLegend', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                title: '@',
                data: '='
            },
            link: function (scope, element) {

                scope.$watch("data",  function (newValue, oldValue) {
                    Highcharts.chart(element[0],  {
                        chart: {
                            type: 'pie',
                            height: (100 / 8 * 10) + '%',
                            width: 175
                        },
                        title: {
                            text: scope.title
                        },
                        plotOptions: {
                            pie: {
                                size:80,
                                allowPointSelect: false,
                                cursor: 'pointer',
                                showInLegend: true,
                                dataLabels: {
                                    enabled: false,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            }
                        },
                        series: [{
                            data: scope.data
                        }]
                    });
                });
            }
        };
    });




