angular.module("whatapop")
    .component("productDetail", {
        templateUrl:"views/product-detail.html",
        bindings:{
          router:"<"
        },
         controller: ["ServiceProducts", function (ServiceProducts) {

             var self = this;
             

             self.$routerOnActivate = function(next) {
                 var productId = next.params.id;
                 
                 ServiceProducts.getProductWithId(productId).then(function(res) {
                     self.product = res.data;
                     self.imageDisplayed=self.product.photos[0];
                 });
             };

             self.displayImage = function (photoUrl) {
                 self.imageDisplayed=photoUrl;
             }

        }]
    });