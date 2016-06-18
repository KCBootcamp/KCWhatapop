angular
    .module("whatapop")
    .service("ServiceCategories", function ($http) {
        this.getCategories = function () {
            return $http.get("http://localhost:8000/api/categories");
        };
    });