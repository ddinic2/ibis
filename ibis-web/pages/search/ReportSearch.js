
'use strict';

angular
    .module('Ibis')
    .controller('ReportSearch', ctrl);

ctrl.$inject = ['$scope', '$routeParams', '$filter', '$location', '$uibModal', '$route', 'toastr', 'ProductService', '$timeout', '$q', '$log'];

function ctrl($scope, $routeParams, $filter, $location, $uibModal, $route, toastr, ProductService, $timeout, $q, $log) {

       var openToast=[];

    $scope.go = function (path) {
        $location.path(path);
    };

    $scope.contracts  = ProductService.getContractData();

    $scope.selectedMac="";

    $scope.pickContract = function () {
        if ($scope.selectedContract){
            $scope.selectedMac = $scope.selectedContract.mac;
        }
    };

    $scope.onSelect = function ($item) {
        $scope.$item = $item;
        $scope.selectedContract = $scope.$item;
    };

    $scope.callFilter = function () {
        if ($scope.selectedMac.length !=17){
            $scope.selectedContract = "";
            openToast.push(toastr.warning("Mac address " +  $scope.selectedMac  + " is not valid format, please pick one of options"));
            return;
        }
        if($scope.selectedMac.length == 17){
            var arr = $scope.selectedMac.split("-");
            for (var i = 0; i<arr.length; i++){
                if (arr[i].length!=2){
                    openToast.push(toastr.warning("Mac address " +  $scope.selectedMac  + " is not valid format, please pick one of options"));
                    return;
                }
            }
        }
        if($scope.selectedMac.length == 17){
            $scope.tab1 = false;
            $scope.tab2 = true;
            $scope.applyingFilter = true;
            $scope.showFilters = false;
            $("#activeId2").addClass("active");
            $("#activeId1").removeClass("active");
            $scope.getAllChartData();
        }
    };

    $scope.notDev = function () {
      openToast.push(toastr.info("Not developed"));
    };

    $scope.showFilters = true;
    $scope.applyingFilter = false;

    $scope.resetFilters = function () {
        $scope.selectedContract = "";
        $scope.selectedMac = "";
        $scope.tab1 = false;
        $scope.tab2 = false;
        $("#activeId1").removeClass("active");
        $("#activeId2").removeClass("active");
        $scope.applyingFilter = false;
        $scope.showFilters = true;
    };

    var d = new Date();

    $scope.oneDay = d.setDate(d.getDate()-1),

    $scope.startDateOptions = {
        minDate: d.setDate(d.getDate()-1),
        maxDate: d.setDate(d.getDate())
    };
    $scope.endDateOptions = {
        minDate:  d.setDate(d.getDate()-6),
        maxDate: new Date()
    };

    $scope.tab1 = false;
    $scope.tab2 = false;
    $scope.setTab1 = function () {
        $scope.tab1 = true;
        $scope.tab2 = false;
        $scope.wiFiConnected = ProductService.getWiFiConnected();
        $scope.hGwWifiUsage = ProductService.gethGwWifiUsage();
        $scope.hGwChannel = ProductService.gethGwChannel();
    };

    $scope.setTab2 = function () {
        $scope.tab1 = false;
        $scope.tab2 = true;
    };

    $scope.showDetails = function () {
        $("#togleDiv").fadeToggle(600);
        $('#caretDown').fadeToggle(10);
    };

    $scope.popup1 = {
        opened: false
    };
    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.popup2 = {
        opened: false
    };
    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };

    $scope.lastSevenValue = function () {
        $scope.getAllChartDataForWeek();

    };

    $scope.getAllChartDataForWeek = function () {

        $scope.chartOptions = ProductService.getCharData7();

        $scope.chartOptions1= ProductService.getChar1Data7();

        $scope.chartOptions2= ProductService.getChar2Data7();

        $scope.pieData = ProductService.getPieData7();
    };

    $scope.getAllChartData = function () {

        $scope.chartOptions = ProductService.getCharData();

        $scope.chartOptions1= ProductService.getChar1Data();

        $scope.chartOptions2= ProductService.getChar2Data();

        $scope.pieData = ProductService.getPieData();
    };

}
