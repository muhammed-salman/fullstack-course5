(function(){
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject=['$scope'];

	function LunchCheckController($scope){
		$scope.message="";
		$scope.lunch_items="";
		$scope.class="";
		$scope.lengthOfItems=function(){
			if($scope.lunch_items=="")
				return 0;
			else{
				var itemsLength=0;
				var arrayOfItems=$scope.lunch_items.split(',');
				for(var i=0;i<arrayOfItems.length;i++){
					if(arrayOfItems[i]!="" && arrayOfItems[i]!=" ")
						itemsLength++;
				}
				return itemsLength;
			}
		};

		$scope.displayMessage=function(){
			var count=$scope.lengthOfItems();
			if(count==0){
				$scope.message="Please enter data first";
				$scope.class="error";
			}
			else if(count<=3){
				$scope.message="Enjoy!";
				$scope.class="success";
			}
			else{
				$scope.message="Too much!";
				$scope.class="success";
			}
		};


	}
})();