angular.module('parkToPlay')
    .controller('venueCtrl', VenueController);

VenueController.$inject = ['$http', '$routeParams'];

//VENUE CONTROLLER
function VenueController($http, $routeParams) {
    console.log($routeParams);

    var vCtrl = this;

    //API CALL SETUP
    vCtrl.get = function(fragment) {
        return $http({
            method: "GET",
            url: 'http://api.parkwhiz.com/' + fragment,
            params: {
                // lat=39.113014
                // lng=-105.358887
                // start: 1476726501,
                // end: 147673730,
                key: 'INSERT KEY'
            }
        });
    };

    //CALL API AND RETREIVE DATA
    vCtrl.get($routeParams.url_fragment)
        .then(function(res) {
            //DATA RETURNED FROM CALL
            console.log(res.data);
            //ASSIGN A VARIABLE TO RETREIVE THE DATA
            vCtrl.venue = res.data;
            vCtrl.searchFourSquare = "";
            vCtrl.callFourSquare();
        }, function(err) {
            console.error(err);
        });

    //FOURSQUARE API CALL
    vCtrl.callFourSquare = function() {
        /* FourSquare API Call */
        $http({
                method: 'GET',
                url: 'https://api.foursquare.com/v2/venues/search',
                params: {
                    client_id: 'INSERT KEY',
                    client_secret: 'INSERT KEY',
                    v: 20130815,
                    near: "Denver",
                    radius: 500,
                    query: vCtrl.searchFourSquare,
                    limit: 50
                }
            })
            .then(function(response) {
                console.log(response.data);
                //ASSIGN A VARIABLE TO RETREIVE THE DATA
                vCtrl.returnVenueRating = response.data;
            }, function(response) {
                console.log("Failure:", response);
            });
    };

}
