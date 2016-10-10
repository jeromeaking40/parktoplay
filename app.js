angular.module('parkToPlay', ['ngRoute'])
    .config(Router);

Router.$inject = ['$routeProvider'];

function Router($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'HomeCtrl as home'
        })
        .when('/about', {
            templateUrl: '/views/about.html',
            controller: 'AboutCtrl as about'
        })
        .otherwise({
            redirectTo: '/'
        });
}