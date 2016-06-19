angular.module("whatapop")
    .directive("searchBar", ["ServiceCategories", function (ServiceCategories) {
        return{
            restrict:"EA",
            templateUrl:"views/search-bar.html",
            scope:{
                categories:"@",
                categoryData:"@",
                searchData:"@",
                onButtonClick:"&"
            },
            link: function (scope) {
                ServiceCategories.getCategories().then(function (res) {
                    scope.categories = res.data;

                    console.log("Obtnenidas categorias", scope.categories);
                });

                
            }
        };

    }]);