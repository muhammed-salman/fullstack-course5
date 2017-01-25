(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http', 'ApiPath'];
function SignUpController($http, ApiPath) {
  var $ctrl = this;
  $ctrl.firstName=null;
  $ctrl.lastName=null;
  $ctrl.email=null;
  $ctrl.phoneNumber=null;
  $ctrl.shortName=null;
  $ctrl.isShortNameValid=false;
  $ctrl.completed=false;
  $ctrl.checkShortName=function(){
  	var config = {};
    if ($ctrl.shortName) {
      config.params = {'short_name': $ctrl.shortName};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(
    	function (response) {
     		$ctrl.isShortNameValid=true;
    	}, 
    	function (response) {
			$ctrl.isShortNameValid=false;    
    	}
    );
  };
  $ctrl.submit=function(){
  	$ctrl.completed=true;
  };
}

})();
