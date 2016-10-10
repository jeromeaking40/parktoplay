angular.module('parkToPlay')
    .controller('AboutCtrl', AboutController);

function AboutController() {
    var about = this;
    about.greeting = "This is the About Page";
    console.log('Test AboutController');
}
