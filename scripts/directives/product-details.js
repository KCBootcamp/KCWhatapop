angular.module("whatapop")
    .directive("productDetails", ["ServiceProducts", function (ServiceProducts) {
        return{
            restrict:"EA",
            templateUrl:"views/product-detail.html",
            scope:{
                categories:"@"
            },
            link: function (scope) {
                scope.ServiceProducts.getProducts()
                    .then(function (res) {
                        scope.products = res.data;
                        console.log("Obtenido datos", products[0]);
                    });



            }
        };

    }]);