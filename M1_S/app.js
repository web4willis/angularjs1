(function () {
'use strict';

angular.module('M1S', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.lunchMenu = "";

	function countItems(string) {
	    var arrayOfItems = string.split(',');

	    var arrayOfItemsClean = [];
	    for (var i = 0; i < arrayOfItems.length; i++) {
	              if(arrayOfItems[i].length != 0){
	                 arrayOfItemsClean.push(arrayOfItems[i]);     
	              }
	    }
	    return arrayOfItemsClean.length;
	}

   $scope.itemsTotal = function () {
    if(countItems($scope.lunchMenu)==0){
    	$scope.responseMessage = 'Please enter data first';
    	$scope.customStyle = {color: "red"}
    } else if (countItems($scope.lunchMenu)<=3) {
    	$scope.responseMessage = 'Enjoy!';
    	$scope.customStyle = {color: "green"}
    } else {
    	$scope.responseMessage = 'Too much!';
    	$scope.customStyle = {color: "green"}
    }
  };
}

})();
