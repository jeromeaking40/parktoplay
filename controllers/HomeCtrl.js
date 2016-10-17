angular.module('parkToPlay')
    .controller('HomeCtrl', HomeController);

HomeController.$inject = ['$http'];

function HomeController($http) {
    var home = this;
    console.log('Test');

    home.searchVenue = "";

    //API CALL
    home.findVenue = function() {
        $http.get('https://api.foursquare.com/v2/venues/search?client_id=INSERTKEY&client_secret=INSERTKEY&v=20130815&near=Denver&query=' + home.searchVenue + '&limit=50')
            .then(function(response, status) {
                    console.log(response.data);
                    console.log(home.searchVenue);
                    //Assign a variable to retrieve the response data
                    home.returnVenue = response.data;
                },
                function(response, status) {
                    console.log("Failure:", status);
                });
    };

}
