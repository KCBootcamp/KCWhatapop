angular.module("whatapop")
    .component("searchBar", {
        templateUrl:"views/search-bar.html",
            bindings:{
                    $router:"<"
            },
        controller: ["ServiceCategories", function (ServiceCategories) {
                var self=this;
                ServiceCategories.getCategories().then(function (res) {
                        self.categories = res.data;

                        console.log("Obtnenidas categorias", self.categories);
                });


                self.notifySearch = function () {

                        self.onButtonClick({searchData: self.searchData,
                                categoryData: self.categoryData});
                        console.log("Notificando click", self.searchData, self.categoryData);
                };
        }]

    });