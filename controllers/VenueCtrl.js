angular.module('parkToPlay')
    .controller('venueCtrl', VenueController);

VenueController.$inject = ['$http', '$routeParams'];

//VENUE CONTROLLER
function VenueController($http, $routeParams) {
    console.info($routeParams);

    var vCtrl = this;

    //PARKWHIZ API CALL SETUP
    vCtrl.get = function(fragment) {
        return $http({
            method: "GET",
            url: 'http://api.parkwhiz.com/' + fragment,
            params: {
                key: 'cb4a71ff3c5e18429ad32c4c4bc8cdb3'
            }
        });
    };

    //LOADING GIF
    vCtrl.loading = true;

    //CALL API AND RETREIVE DATA
    vCtrl.get($routeParams.url_fragment)
        .then(function(res) {
            //DATA RETURNED FROM CALL
            console.info(res.data);
            vCtrl.loading = false;
            //ASSIGN A VARIABLE TO RETREIVE THE DATA
            vCtrl.venue = res.data;
            console.info(vCtrl.venue);
            if (vCtrl.venue.parking_listings === undefined) {
                alertify.alert('Park to Play', 'Sorry there was no parking spots found! Please search another venue.');
                console.info('No response');
            }
        }, function(err) {
            console.error(err);
        });
}
