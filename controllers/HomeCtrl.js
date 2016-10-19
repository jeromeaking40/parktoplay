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

            //Assign a variable to retrieve the response data
            home.returnVenue = response.data;
            home.searchVenue = "";
        }, function(response) {
            console.log("Failure:", response);
        });
    };
}

/* FourSquare API Call */
// $http({
//         method: 'GET',
//         url: 'https://api.foursquare.com/v2/venues/explore',
//         params: {
//             client_id: 'XXEJ3UJTJBYJ3RETPR3G24EHCLNOIWVMVMMCRYEQMKBAMS1Q',
//             client_secret: 'FCA0TMZ0WGESRGC0BWXQTIO3XZOVS1ZDMIH300TFVUVSZBZS',
//
//             v: 20130815,
//             near: "Denver",
//             radius: 500,
//             query: home.searchVenue,
//             limit: 50
//         }
//
//     })
// $http.get('https://api.foursquare.com/v2/venues/explore?client_id=XXEJ3UJTJBYJ3RETPR3G24EHCLNOIWVMVMMCRYEQMKBAMS1Q&client_secret=FCA0TMZ0WGESRGC0BWXQTIO3XZOVS1ZDMIH300TFVUVSZBZS&v=20130815&near=Denver&near=Boulder&query= ' + home.searchVenue + '&limit=50')
