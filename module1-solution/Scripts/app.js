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


//(function () {
//    'use strict';

//    var app = angular.module('LunchCheck', []);

//    var controller = app.controller('LunchCheckController', LunchCheckController);

//    LunchCheckController.$inject = ['$scope'];
//    function LunchCheckController($scope) {

//        $scope.changeMessage = function (dishesString) {
//            console.log(dishesString);
//            if (dishesString == undefined || dishesString === "") {
//                var dishesArray = [];
//            } else {
//                var dishesArray = cleanArray(dishesString.split(','));
//            }

//            if (dishesArray.length == 0) {
//                showMessage("Please enter data first", "red", "red");
//            }
//            if (dishesArray.length >= 1 && dishesArray.length <= 3) {
//                showMessage("Enjoy!", "green", "green");
//            }
//            if (dishesArray.length > 3) {
//                showMessage("Too Much!", "green", "green");
//            }

//        }

//        function showMessage(message, textColor, borderColor) {
//            $scope.message = message;
//            $scope.messageColor = textColor;
//            $scope.borderColor = borderColor;
//        }
//    }

//})();

//function cleanArray(stringArray) {
//    var stringArrayNonEmpty = [];
//    if (stringArray != undefined) {
//        for (var i = 0; i < stringArray.length; i++) {
//            if (stringArray[i]) {
//                stringArrayNonEmpty.push(stringArray[i]);
//            }
//        }
//    }
//    console.log(stringArrayNonEmpty.length);
//    return stringArrayNonEmpty;
//}