(function() {
  var app = angular.module('gemStore', ['product-directives']);

  	app.controller('StoreController', ['$http', function($http){
    	var store = this;

    	store.products = [];

    	$http.get('store-products.json').success(function(data) {
    		store.products = data;
    	});
 	}]);
  
  	app.controller('ReviewController', function() {
	    this.review = {};
	    this.review.createdOn = Date.now();

	    this.addReview = function(product){
	    	product.reviews.push(this.review);
	     	this.review = {};
	    };
  	});
})();