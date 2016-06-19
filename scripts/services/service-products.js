angular
    .module("whatapop")
    .service("ServiceProducts", ["$http","Properties",function ($http,Properties) {
        this.getProducts = function () {
            return $http.get(Properties.devServerUrl+Properties.endpointProducts);
        };

        this.getProductWithId = function(id) {

            return $http.get(Properties.devServerUrl+Properties.endpointProducts + "/" + id);
        };
        
        this.getFavoritesProducts= function () {
            return JSON.parse(localStorage.getItem("Favorites"));
        };
        
        this.setFavoritesProducts= function (favoriteProducts) {
            localStorage.setItem("Favorites", JSON.stringify(favoriteProducts));
        };

        
    }])

;