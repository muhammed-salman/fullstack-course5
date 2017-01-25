(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);


SignUpService.$inject = [];
function SignUpService() {
  var service = this;

  service.firstName=null;

  service.lastName=null;

  service.email=null;

  service.phoneNumber=null;
}



})();
