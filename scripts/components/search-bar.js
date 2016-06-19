angular.module("whatapop")
    .component("searchBar", {
        templateUrl:"views/search-bar.html",
        controller: function () {
                var self=this;
                ServiceCategories.getCategories().then(function (res) {
                        self.categories = res.data;

                        console.log("Obtnenidas categorias", categories);
                });


                scope.notifySearch = function () {
                        scope.onButtonClick({searchData: scope.searchData,
                                categoryData: scope.categoryData});
                        console.log("Notificando click", scope.searchData, scope.categoryData);
                };
        },
        bindings:{

        }
    });