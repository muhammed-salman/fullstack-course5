(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['regData'];
function MyInfoController(regData) {
	var $ctrl=this;
	$ctrl.regData=regData;
}
})();
