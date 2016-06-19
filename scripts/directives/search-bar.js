angular.module("whatapop")
    .directive("searchBar", ["ServiceCategories", function (ServiceCategories) {
        return{
            restrict:"EA",
            templateUrl:"views/search-bar.html",
            scope:{
                categories:"@",
                onButtonClick:"&"
            },
            link: function (scope) {
                ServiceCategories.getCategories().then(function (res) {
                    scope.categories = res.data;

                    console.log("Obtnenidas categorias", scope.categories);
                });

                 scope.notifySearch = function () {
                    scope.onButtonClick({searchData: scope.searchData,
                        categoryData: scope.categoryData});
                     console.log("Notificando click", scope.searchData, scope.categoryData);
                 };
            }
        };

    }]);