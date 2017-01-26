(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var $ctrl = this;
  $ctrl.regData={};
  $ctrl.regData.isShortNameValid=false;
  $ctrl.regData.completed=false;

  $ctrl.checkShortName=function(){
    var menuid=null;
    if ($ctrl.regData.shortName) {
      menuid = $ctrl.regData.shortName;
    }
    MenuService.retrieveDish(menuid.toUpperCase())
    .then(function (response) {
            $ctrl.regData.dish=response.data;
            $ctrl.regData.isShortNameValid=true;
            // console.log($ctrl.isShortNameValid);
          },function (response){
            $ctrl.regData.isShortNameValid=false;
            $ctrl.regData.completed=false;
            // console.log($ctrl.isShortNameValid);
          }
      );
  };

  $ctrl.submit=function(){
    $ctrl.regData.completed=true;
    MenuService.saveUser($ctrl.regData);
  };
}

})();
