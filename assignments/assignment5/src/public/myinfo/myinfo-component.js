(function(){
	"use strict";
	angular.module('public')
	.component('myInfo',{
		templateUrl:'src/public/myinfo/details.html',
		bindings: {
			regData: '<',
			completed: '<'
		}
	});
})();