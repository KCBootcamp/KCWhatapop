angular.module("whatapop")
    .directive("productList", ["ServiceProducts", "ServiceCategories",function (ServiceProducts,ServiceCategories){
        return{
            restrict:"EA",
            templateUrl:"views/product-list.html",
            scope:{
                router:"<"
            },
            link: function (scope) {

                scope.searchData={
                };

                scope.ServiceProducts.getProducts().then(function (res) {
                    scope.products = res.data;
                });

                scope.ServiceCategories.getCategories().then(function (res) {
                    scope.categories = res.data;
                });
                /*scope.ServiceProducts.getProducts()
                    .then(function (res) {
                        scope.products = res.data;
                        console.log("Obtenido datos", products[0]);
                    });*/



            }
        };

    }]);

/*
.component("productList", {
    templateUrl:"views/product-list.html",
    bindings:{
        router:"<",
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
});*/
