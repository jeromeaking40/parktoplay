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
                url: '/search',
                params: {
                    name: home.searchVenue
                }
            })
            .then(function(response) {
                    console.log(response.data);
                    //ASSIGN A VARIABLE TO RETREIVE THE DATA
                    home.returnVenue = response.data;
                    console.info(response.data.length);
                    if (response.data.length === 0) {
                        alertify.alert("Park to Play", "Sorry we can't find any venues with that name. Please choose another venue.");
                        console.info("No response");
                    }
                    home.searchVenue = "";
                },
                function(response) {
                    console.info("Failure:", response);
                });
    };
}
