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

            ServiceCategories.getCategories().then(function (res) {
                self.categories = res.data;
            });
        }]
    });
