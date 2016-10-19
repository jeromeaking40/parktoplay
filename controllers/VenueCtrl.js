angular.module('parkToPlay')
    .controller('venueCtrl', VenueController);

VenueController.$inject = ['$http','$routeParams'];

function VenueController($http, $routeParams) {
    console.log($routeParams);

    var vCtrl = this;

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


    vCtrl.get($routeParams.url_fragment)
        .then(function(res){
            console.log(res.data);
            vCtrl.venue = res.data;
        }, function(err) {
            console.error(err);
        })
}
