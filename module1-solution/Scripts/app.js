angular.module('LunchCheck', [])
.controller("LunchCheckController", LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
$scope.items='';
$scope.message='';
function CheckItems()
{
  if($scope.items=='')
  { 
  $scope.message='Please enter data first';
  }
  else
  {
    var items[] = $scope.items.split(",");
    if(items.length<=3)
    {
     $scope.message='Enjoy!';
    }
    else
    {
    $scope.message='Too much!';
    }
  }
};
}
