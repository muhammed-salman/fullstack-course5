(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http','ApiPath'];
function SignUpController($http,ApiPath) {
  var $ctrl = this;
  $ctrl.regData={};
  $ctrl.isShortNameValid=false;
  $ctrl.completed=false;

  $ctrl.checkShortName=function(){
    var menuid=null;
    if ($ctrl.regData.shortName) {
      menuid = $ctrl.regData.shortName;
    }

    return $http.get(ApiPath +'/menu_items/'+menuid+".json")
    .then(function (response) {
            $ctrl.isShortNameValid=true;
            console.log($ctrl.isShortNameValid);
          },function (response){
            $ctrl.isShortNameValid=false;
            console.log($ctrl.isShortNameValid);
          }
      );
  };

  $ctrl.submit=function(){
    $ctrl.completed=true;
  };
}

})();
