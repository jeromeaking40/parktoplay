angular.module('parkToPlay', ['ngRoute'])
    .config(Router);

Router.$inject = ['$routeProvider'];

function Router($routeProvider) {
    //CONFIGURING ROUTES
    $routeProvider
        .when("/", {
            templateUrl: "/views/home.html",
            controller: "HomeCtrl as home"
        })
        .when("/search", {
            templateUrl: "/views/search.html"
        })
        .when("/contact", {
            templateUrl: "/views/contact.html"
        })
        .when("/venue/:url_fragment", {
            templateUrl: "/views/venue.html",
            controller: "venueCtrl as vCtrl"
        })
        .when("/errorpage", {
            templateUrl: "/views/errorpage.html"
        })
        .otherwise({
            redirectTo: "/errorpage"
        });
}
