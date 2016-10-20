angular.module('parkToPlay')
    .controller('venueCtrl', VenueController);

VenueController.$inject = ['$http', '$routeParams'];

//VENUE CONTROLLER
function VenueController($http, $routeParams) {
    console.log($routeParams);
    // alertify.success("Welcome to alertify!");
    var vCtrl = this;

    //PARKWHIZ API CALL SETUP
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


    //LOADING GIF
    vCtrl.loading = true;

    //CALL API AND RETREIVE DATA
    vCtrl.get($routeParams.url_fragment)
        .then(function(res) {
            //DATA RETURNED FROM CALL
            console.log(res.data);
            vCtrl.loading = false;
            //ASSIGN A VARIABLE TO RETREIVE THE DATA
            vCtrl.venue = res.data;
            if (vCtrl.venue.parking_listings === undefined) {
                alertify.alert('Park to Play', 'Sorry there was no parking spots found! Please search another venue.');
                console.log('No response');
            }
            // vCtrl.callFourSquare();
        }, function(err) {
            console.error(err);
        });

}
