(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesDetailController', CategoriesDetailController);

// 'item' is injected through state's resolve
CategoriesDetailController.$inject = ['item']
function CategoriesDetailController(item) {
  var catDetail = this;
  catDetail.name = item.name;
  catDetail.quantity = item.quantity;
  catDetail.description = item.description;
}

})();
