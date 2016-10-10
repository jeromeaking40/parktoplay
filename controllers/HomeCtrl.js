angular.module('parkToPlay')
    .controller('HomeCtrl', HomeController);

function HomeController() {
    var home = this;
    home.greeting = 'This is the home controller';
    console.log('Test');
}
