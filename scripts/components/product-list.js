angular.module("whatapop")
    .component("productList", {
        templateUrl:"views/product-list.html",
        bindings:{
            router:"<",
            productSelected:"&"
        },
        controller: ["ServiceProducts", "ServiceCategories",function (ServiceProducts,ServiceCategories) {
            var self=this;

            self.searchData={
            };

            ServiceProducts.getProducts().then(function (res) {
                self.products = res.data;
            });
            self.productClicked=function (product) {
                self.$router.navigate("['/ProductDetail',{id:product.name}]");
            };
            ServiceCategories.getCategories().then(function (res) {
                self.categories = res.data;

                console.log("Obtnenidas categorias", scope.categories);
            });
        }]
    });
