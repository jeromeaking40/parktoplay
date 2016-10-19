angular.module('parkToPlay')
    .controller('HomeCtrl', HomeController);

HomeController.$inject = ['$http', '$q'];

function HomeController($http, $q) {
    var home = this;

    console.info('Home Controller :: loaded');

    //API CALL
    home.findVenue = function() {
        $http({
                method: "GET",
                url: 'http://api.parkwhiz.com/venue/search/',
                params: {
                    name: home.searchVenue,
                    start: 1476726501,
                    end: 147673730,
                    key: 'cb4a71ff3c5e18429ad32c4c4bc8cdb3'
                }
            })
            .then(function(response) {
                console.log(response.data);

                //ASSIGN A VARIABLE TO RETREIVE THE DATA
                home.returnVenue = response.data;
                home.searchVenue = "";
            }, function(response) {
                console.log("Failure:", response);
            });
    };
}
