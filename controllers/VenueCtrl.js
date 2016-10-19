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
                key: 'cb4a71ff3c5e18429ad32c4c4bc8cdb3'
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
            vCtrl.searchFourSquare =
                vCtrl.callFourSquare();
        }, function(err) {
            console.error(err);
        });


    //FOURSQUARE API CALL
    vCtrl.callFourSquare = function() {
        /* FourSquare API Call */
        $http({
                method: 'GET',
                url: 'https://api.foursquare.com/v2/venues/explore',
                params: {
                    client_id: 'XXEJ3UJTJBYJ3RETPR3G24EHCLNOIWVMVMMCRYEQMKBAMS1Q',
                    client_secret: 'FCA0TMZ0WGESRGC0BWXQTIO3XZOVS1ZDMIH300TFVUVSZBZS',
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
