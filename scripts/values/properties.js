angular.module("whatapop")
    .value("Properties", {
        devServerUrl: "http://localhost:8000",
        endpointProducts:"/api/products",
        endPointCategories:"/api/categories",
        noFavoriteImageUrl:"/images/no-favorites.png",
        favoriteImageUrl:"/images/favorites.png"
    });