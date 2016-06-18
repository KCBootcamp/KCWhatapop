angular
    .module("whatapop")
    .service("ServiceProducts", function () {
        this.getProducts = function () {
            return [{
                name: "Product 1",
                imageURL: "http://placehold.it/320x150",
                description:"This is the description of Product 1",
                price: 24.99
            }];
        };
    });