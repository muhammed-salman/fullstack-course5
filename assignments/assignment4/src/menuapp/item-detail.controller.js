(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['MenuDataService','itemslist'];
function ItemDetailController(MenuDataService,itemslist) {
  var itemDetailCtrl = this;
  itemDetailCtrl.itemslist=itemslist;
}

})();
