var app =angular.module("whatapop",["ngComponentRouter"]);
app
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    });

app.value("$routerRootComponent", "root");