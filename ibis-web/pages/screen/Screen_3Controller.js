
'use strict';

angular
    .module('PhoneBook')
    .controller('Screen_3Controller', ctrl);

ctrl.$inject = ['$scope', '$routeParams', '$filter', '$location', '$uibModal', '$route', 'toastr', 'ProductService'];

function ctrl($scope, $routeParams, $filter, $location, $uibModal, $route, toastr, ProductService) {

    /*   var openToast=[];*/

    $scope.valueOfProduct = 1;
    $scope.totalCheck = 374.99;


    $scope.updateChartAndRedirect = function (path) {
        $location.path(path);
    };

    /*menu nav*/
    $(document).ready(function () {
        var sideslider = $('[data-toggle=collapse-side]');
        var sel = sideslider.attr('data-target');
        var sel2 = sideslider.attr('data-target-2');
        sideslider.click(function (event) {
            $(sel).toggleClass('in');
            $(sel2).toggleClass('out');
        });
    });


}