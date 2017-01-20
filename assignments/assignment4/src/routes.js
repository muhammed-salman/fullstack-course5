(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // // Premade list page
  // .state('categories', {
  //   url: '/categories',
  //   templateUrl: 'src/menuapp/templates/categories.template.html',
  //   controller: 'CategoriesListController as mainList',
  //   resolve: {
  //     items: ['MenuDataService', function (MenuDataService) {
  //       return MenuDataService.getAllCategories();
  //     }]
  //   }
  // })

  // .state('items', {
  //   url: '/items/{itemId}',
  //   templateUrl: 'src/menuapp/templates/item-detail.template.html',
  //   controller: 'ItemDetailController as itemDetail',
  //   resolve: {
  //     item: ['$stateParams', 'MenuDataService',
  //           function ($stateParams, MenuDataService) {
  //             return MenuDataService.get()
  //               .then(function (items) {
  //                 return items[$stateParams.itemId];
  //               });
  //           }]
  //   }
  // });
}

})();
