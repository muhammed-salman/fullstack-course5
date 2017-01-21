(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/templates/item-detailList.template.html',
  bindings: {
    itemslist: '<'
  }
});

})();
