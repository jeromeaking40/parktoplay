angular.module('parkToPlay', ['ngRoute'])
    .config(Router);

Router.$inject = ['$routeProvider'];

function Router($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "/views/home.html",
            controller: "HomeCtrl as home"
        })
        .when("/search", {
            templateUrl: "/views/search.html",
        })
        .when("/contact", {
            templateUrl: "/views/contact.html",
        })
        .when("/venue/:url_segment", {
            templateUrl: "/views/venue.html",
            controller: "venueCtrl as venue"
        })
        .otherwise({
            redirectTo: "/"
        });
}
