angular.module("whatapop")
    .component("productList", {
        templateUrl:"views/product-list.html",
        controller: ["ServiceProducts",function (ServiceProducts) {
            var self=this;
            ServiceProducts.getProducts().then(function (res) {
                self.products = res.data;
            });
        }],
        bindings:{
            
        }
    });
