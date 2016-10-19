angular.module('parkToPlay')
    .controller('venueCtrl', VenueController);

function VenueController($http, $routeParams) {
    console.log($routeParams);

    $http({
        method: "GET",
        url: 'http://api.parkwhiz.com/' + $routeParams.url_segment,
        params: {
            // lat=39.113014
            // lng=-105.358887
            start: 1476726501,
            end: 147673730,
            key: 'cb4a71ff3c5e18429ad32c4c4bc8cdb3'
        }

    }).then(function(response) {
            console.log(response.data);
        },
        function(response) {
            console.log("Failure:", response);
        });


}
