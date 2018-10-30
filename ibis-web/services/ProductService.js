
    'use strict';

    angular
        .module('Ibis')
        .factory('ProductService', serviceFn);

    serviceFn.$inject = ['$http', '$route', 'toastr', '$location'];

    function serviceFn($http, $route, toastr, $location) {


      /*  console.log('$location',$location.$$absUrl);     ovo koristi umesto WebApiBaseUrl*/


      var WebApiBaseUrl = $location.protocol() + "://" + $location.host() + ":" + 9000;

        var service = {
            getContractData: getContractData,
            getPieData: getPieData,
            getCharData:getCharData,
            getChar1Data:getChar1Data,
            getChar2Data: getChar2Data,
            getCharData7: getCharData7,
            getPieData7: getPieData7,
            getChar2Data7: getChar2Data7,
            getChar1Data7: getChar1Data7,
            getWiFiConnected: getWiFiConnected,
            gethGwWifiUsage: gethGwWifiUsage,
            gethGwChannel: gethGwChannel

        };

        return service;




        function getContractData(){
            var testData = [
                {
                    mac: "58-90-77-22-75-5C",
                    contractId: 54867972,
                },
                {
                    mac: "5A-3D-30-13-8F-15",
                    contractId: 31495080,
                },
                {
                    mac: "A3-43-AE-41-2E-D7",
                    contractId: 31452503,
                },
                {
                    mac: "B6-06-F6-C7-D5-04",
                    contractId: 79238775,
                },
                {
                    mac: "9D-01-4A-A4-CB-91",
                    contractId: 39531833,
                },
                {
                    mac: "D7-C4-71-4A-47-35",
                    contractId: 33992438,
                },
                {
                    mac: "0D-D3-6B-05-86-59",
                    contractId: 93603004,
                }
                ];
           return testData;
        }

        function getPieData(){
            var testData = [{
                name: "Google chrome",
                y: 56.33
            }, {
                name: "Explorer",
                y: 13.03,
                sliced: true,
                selected: true
            }, {
                name: "Firefox",
                y: 15.38
            }, {
                name: "Safari",
                y: 8.77
            }, {
                name: "Opera",
                y: 3.91
            }, {
                name: "Proprietary or Undetectable",
                y: 1.2
            }];
            return testData;
        }

        function getPieData7() {
            var testData = [{
                name: "Chrome",
                y: 46.33
            }, {
                name: "Firefox",
                y: 8.03,
                sliced: true,
                selected: true
            }, {
                name: "Explorer",
                y: 13.38
            }, {
                name: "Safari",
                y: 2.77
            }, {
                name: "Opera",
                y: 5.91
            }, {
                name: "Proprietary or Undetectable",
                y: 4.2
            }];
            return testData;
        }

        function getCharData() {
            var testData =  {
                title: {
                    text: 'Temperature data'
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },

                series: [{
                    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                }]
            };
            return testData;
        }

        function getChar1Data() {
            var testData = {
                title: {
                    text: 'Temperature'
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },

                series: [{
                    data: [42.3, 80.6, 20.5, 65.3, 46.0, 235.0, 90.6, 150.2, 70.4, 111.1, 48.6, 76.4]
                }]
            };
            return testData;
        }

        function getChar1Data7() {
            var testData = {
                title: {
                    text: 'Temp'
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },

                series: [{
                    data: [11.3, 8.6, 20.5, 50.3, 41.0, 130.0, 222.6, 111.2, 30.4, 3.1, 48.6, 11.4]
                }]
            };
            return testData;
        }

        function getChar2Data() {
            var testData = {
                title: {
                    text: 'Temperature Faraday'
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },

                series: [{
                    data: [62.3, 51.6, 195.5, 45.3, 67.0, 211.0, 110.6, 190.2, 110.4, 130.1, 28.6, 96.4]
                }]
            };
            return testData;
        }

        function getChar2Data7() {
            var testData = {
                title: {
                    text: 'Temperature Celsius'
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },

                series: [{
                    data: [32.3, 27.6, 46.5, 32.3, 45.0, 11.0, 42.6, 11.2, 5.4, 29.1, 28.6, 41.4]
                }]
            };
            return testData;
        }

        function getCharData7() {
            var testData =  {
                title: {
                    text: 'Test Test'
                },
                xAxis: {
                    categories: ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'Jul',
                        'Jun', 'May', 'Apr', 'Mar', 'Feb', 'Jan']
                },

                series: [{
                    data: [14.3, 80.6, 120.5, 42.3, 25.0, 22.0, 220.6, 150.2, 90.4, 70.1, 95.6, 40.4]
                }]
            };
            return testData;
        }

        function getWiFiConnected() {
            var testData =
                [ {
                name: "Percent of time with connected user (s)",
                y: 48,
                sliced: true,
                selected: true
            }, {
                name: "Free",
                y: 52
            }];
            return testData;
        }

        function gethGwWifiUsage() {
            var testData =  [ {
                name: "Low",
                y: 46,
                sliced: true,
                selected: true
            }, {
                name: "Medium",
                y: 46
            },{
                name: "High",
                y: 46
            }];
            return testData;
        }

        function gethGwChannel() {
            var testData = [ {
                name: "Auto Yes",
                y: 48
            }, {
                name: "Auto No",
                y: 52,
                sliced: true,
                selected: true
            }];
            return testData;
        }

    }

