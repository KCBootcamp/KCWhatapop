angular.module("whatapop")
    .component("root", {
        $routeConfig:[{
            name:"ProductList",
            path:"/product-list",
            component:"productList",
            useAsDefault: true

        },{
            name:"ProductDetail",
            path:"/product-detail/:id",
            component:"productDetail"
        }
        ],
        templateUrl: "views/root.html"
    });
  