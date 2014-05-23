(function() {
  var app = angular.module('gemStore', ['store-products']);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('ReviewController', function() {
    this.review = {};
    this.review.createdOn = Date.now();

    this.addReview = function(product){
    	product.reviews.push(this.review);
     	this.review = {};
    };
});

 
    }
  ];
})();