(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


// MenuDataService.$inject = ['$q', '$timeout']
function MenuDataService() {
  var service = this;

  // // Returns a promise, NOT items array directly
  service.getAllCategories = function () {
    return $http({
          method:"GET",
          url: (ApiBasePath+"/categories.json")
          }).then(function (result) {
          return result.data;
          });
  };
  service.getItemsForCategories = function (categoryShortName) {
    var path=ApiBasePath+"/menu_items.json?category="+categoryShortName;
    return $http({
          method:"GET",
          url: (path)
          }).then(function (result) {
          return result.data.menu_items;
          });
  };
}

})();
