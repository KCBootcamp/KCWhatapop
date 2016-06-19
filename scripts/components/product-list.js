angular.module("whatapop")
    .component("productList", {
        templateUrl:"views/product-list.html",
        bindings:{
            router:"<",
        },
        controller: ["ServiceProducts", "ServiceCategories","Properties",function (ServiceProducts,ServiceCategories,Properties) {
            var self=this;

            self.searchData={
            };

            if (typeof(Storage) !== "undefined") {
                self.favoriteProducts = ServiceProducts.getFavoritesProducts();
                if (!self.favoriteProducts) {
                    self.favoriteProducts = [];
                }
            }

            ServiceProducts.getProducts().then(function (res) {
                self.products = res.data;
            });

            ServiceCategories.getCategories().then(function (res) {
                self.categories = res.data;
            });

            self.setFavoriteIcon=function (id)  {
                if (self.isFavorite(id)) {
                    self.favoriteImageUrl = Properties.favoriteImageUrl;
                } else {

                    self.favoriteImageUrl = Properties.noFavoriteImageUrl;
                }
                return self.favoriteImageUrl;
            };

            self.isFavorite=function (id) {
                var index = self.favoriteProducts.indexOf(id);
                if (index===-1){
                    return false;
                } else {
                    return true;
                }
            };


            
        }]
    });

