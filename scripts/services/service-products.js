angular
    .module("whatapop")
    .service("ServiceProducts", function ($http) {
        this.getProducts = function () {
            return $http.get("http://localhost:8000/api/products");
        };
    })
;