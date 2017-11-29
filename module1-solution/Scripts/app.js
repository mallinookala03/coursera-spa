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
                var selitems = cleanArray($scope.items.split(","));
                if (selitems.length <= 3) {
                    $scope.message = "Enjoy!";
                }
                else {
                    $scope.message = "Too much!";
                }
            }
        }
        function cleanArray(stringArray) {
            var stringArrayNonEmpty = [];
            if (stringArray != undefined) {
                for (var i = 0; i < stringArray.length; i++) {
                    if (stringArray[i]) {
                        stringArrayNonEmpty.push(stringArray[i]);
                    }
                }
            }
            return stringArrayNonEmpty;
        }
    };
})();
