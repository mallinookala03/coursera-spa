(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller("LunchCheckController", LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.items = "";
        $scope.message = "";
        $scope.CheckItems = function() {
            if ($scope.items == "") {
                $scope.message = "Please enter data first";
            }
            else {
                var selitems = $scope.items.split(",");
                if (selitems.length <= 3) {
                    $scope.message = "Enjoy!";
                }
                else {
                    $scope.message = "Too much!";
                }
            }
        }
    };
})();
