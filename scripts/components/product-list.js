angular.module("whatapop")
    .component("productList", {
        templateURL:"views/product-list.html",
        controller: ["ServiceProducts",function (ServiceProducts) {
            var self=this;
            ServiceProducts.getProducts().then(function (res) {
                self.products = res.data;
            });
        }],
        bindings:{
            
        }
    });
/*.controller("ProductList", ["$scope", "ServiceProducts", function ($scope,ServiceProducts) {
        ServiceProducts.getProducts().then(function (res) {
            $scope.products = res.data;
        });
    }]);*/
