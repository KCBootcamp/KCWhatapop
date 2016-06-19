angular.module("whatapop")
    .component("productDetail", {
        templateUrl:"views/product-detail.html",
        bindings:{
          router:"<"
        },
         controller: ["ServiceProducts", "Properties", function (ServiceProducts,Properties) {

             var self = this;

             self.$routerOnActivate = function(next) {
                 var productId = next.params.id;
                 
                 ServiceProducts.getProductWithId(productId).then(function(res) {
                     self.product = res.data;
                     self.imageDisplayed=self.product.photos[0];


                     if (typeof(Storage) !== "undefined") {
                         self.favoriteProducts= ServiceProducts.getFavoritesProducts();
                         if(!self.favoriteProducts){
                             self.favoriteProducts=[];
                         }
                         self.setFavoriteIcon();
                     }
                 });
             };

             self.displayImage = function (photoUrl) {
                 self.imageDisplayed=photoUrl;
             };

              self.setFavoriteIcon=function ()  {
                 if (self.isFavorite()) {
                     self.favoriteImageUrl = Properties.favoriteImageUrl;
                 } else {
                     self.favoriteImageUrl = Properties.noFavoriteImageUrl;
                 }
             };

             self.isFavorite=function () {
                var index = self.favoriteProducts.indexOf(self.product.id);
                 if (index===-1){
                     return false;
                 } else {
                     return true;
                 }
             };


             self.changeFavoriteStatus=function () {
                 if (typeof(Storage) !== "undefined") {
                     if (!self.isFavorite()) {
                         self.favoriteProducts.push(self.product.id);

                     } else {
                         self.favoriteProducts.splice(self.favoriteProducts.indexOf(self.product.id), 1);
                     }
                     ServiceProducts.setFavoritesProducts(self.favoriteProducts);
                     self.setFavoriteIcon();
                 }
             }

        }]
    });