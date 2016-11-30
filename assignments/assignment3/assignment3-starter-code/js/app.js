(function(){
	'use strict';

	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems',FoundItemsDirective)
	.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

	NarrowItDownController.$inject=['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var narrow=this;
		narrow.found=null;
		narrow.searchItems=function(searchTerm){
			var promise=MenuSearchService.getMatchedMenuItems(searchTerm);

			promise.then(function(response){
				narrow.found=response;
				// console.log(narrow.found);
			})
			.catch(function (error) {
	    		console.log("Not Able to retrieve data. Something went terribly wrong.");
	  		});
		};

		narrow.removeItem = function (itemIndex) {
    		narrow.found.splice(itemIndex, 1);
	  	};

	}

	MenuSearchService.$inject=['$http','ApiBasePath'];
	function MenuSearchService($http,ApiBasePath){
		var service=this;
		service.getMatchedMenuItems=function(searchTerm){
			return $http({
					method:"GET",
					url: (ApiBasePath+"/menu_items.json")
				}).then(function (result) {
    		// process result and only keep items that match
    			var items=result.data.menu_items;
    			var i=items.length;
    			if(searchTerm=="")
    				return "";

    			while(i--){
    				if(items[i].description.indexOf(searchTerm)==-1){
    					items.splice(i, 1);
    				}
    			}

    			var foundItems= items;

    			// return processed items
    			// console.log(foundItems);
    			return foundItems;
			});
		};
		
	}

	function FoundItemsDirective() {
  		var ddo = {
    		templateUrl: 'narrowlist.html',
    		scope: {
		      found: '<',
		      onRemove: '&'
		    },
		    controller: NarrowItDownController,
	    	controllerAs: 'list',
	    	bindToController: true
	  	};

  		return ddo;
	}



})();