angular.module("whatapop")
    .directive("bvcSearchBar",  function () {
        return{
            restrict:"EA",
            templateUrl:"views/search-bar.html",
            scope:{
                sources: "@",
                displayInline:"@",
                onButtonClick:"&"
            },
            link: function (scope) {
                 scope.notifySearch = function () {
                    scope.onButtonClick({searchData: scope.searchData,
                        categoryData: scope.categoryData});
                     console.log("Notificando click", scope.searchData, scope.categoryData);
                 };
            }
        };

    });