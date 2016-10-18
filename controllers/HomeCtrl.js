angular.module('parkToPlay')
    .controller('HomeCtrl', HomeController);


HomeController.$inject = ['$http'];

function HomeController($http) {
    var home = this;
    console.log('Test');

    home.searchVenue = "";

    //API CALL
    home.findVenue = function() {
        $http({
                method: "GET",
                url: 'http://api.parkwhiz.com/venue/search/',
                params: {
                    name: home.searchVenue,
                    // lat=39.113014
                    // lng=-105.358887
                    start: 1476726501,
                    end: 147673730,
                    key: 'cb4a71ff3c5e18429ad32c4c4bc8cdb3'
                }
            })
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
