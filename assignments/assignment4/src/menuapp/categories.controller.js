(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['MenuDataService','items'];
function CategoriesListController(MenuDataService,items) {
  var catListCtrl = this;
  catListCtrl.items = items;
}

})();
