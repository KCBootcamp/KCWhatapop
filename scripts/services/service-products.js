angular
    .module("whatapop")
    .service("ServiceProducts", ["$http","Properties",function ($http,Properties) {
        this.getProducts = function () {
            return $http.get(Properties.devServerUrl+Properties.endpointProducts);
        };

        this.getProductWithId = function(id) {

            return $http.get(Properties.devServerUrl+Properties.endpointProducts + "/" + id);
        };
    }])

;