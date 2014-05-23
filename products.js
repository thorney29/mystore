(function() {
  var app =  angular.module('product-directives', []);
      
      app.directive('productTabs', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-tabs.html',
            controller: function() { 
              this.tab = 1;
              this.isSet = function(checkTab) {
                return this.tab === checkTab;
              };
              this.setTab = function(activeTab) {
                this.tab = activeTab;
          		};
        		},
            controllerAs: 'tab'
  	    };
      });

      app.directive('productGallery', function() {
        return {
           		restrict: 'E',
           		templateUrl: 'templates/product-gallery.html',
           		controller: function() {
        			  this.current = 0;
            		this.setCurrent = function(newValue) {
               		if(newValue !== null) {
                		this.current = newValue; 
              		}
              		else{
              			this.current = 0; 
              		}
                }; 
              },
          		controllerAs: 'gallery'
        };
    });
  
    app.directive("productDescription", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/product-description.html" 
        };
    });

    app.directive("productReviews", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/product-reviews.html"
        };
    });

    app.directive("productSpecs", function() {
        return {
            restrict:"A",
            templateUrl: "templates/product-specs.html"
        };
    });
})();
