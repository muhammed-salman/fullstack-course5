(function(){
	'use strict';

	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService)


	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
  		var toBuy = this;

  		toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
  		toBuy.addItemToBought= function(index){
  			ShoppingListCheckOffService.addItemToBought(index);
  		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
  		var bought = this;

  		bought.items = ShoppingListCheckOffService.getItemsBought();

	}

	function ShoppingListCheckOffService(){
		var service =this;
		var toBuy=[
					{ name:'Cookies',quantity: 10 },
					{ name:'Chips', quantity: 20 },
					{ name:'Honey', quantity: 5 },
					{ name:'Choclates', quantity: 9 },
					{ name:'Tea Bags', quantity: 10 }
				];
		var bought=[];

		service.addItemToBought=function(itemIndex){
			var removedItem=toBuy.splice(itemIndex,1);
			bought.push(removedItem[0]);
		};

		service.getItemsToBuy=function(){
			return toBuy;
		};

		service.getItemsBought=function(){
			return bought;
		};
	}
})();