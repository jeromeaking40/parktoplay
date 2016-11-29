var request = require('request');

module.exports = {
    search: function(req, res) {
        request('http://api.parkwhiz.com/venue/search/' +
            '?start=1476726501&end=147673730&key=cb4a71ff3c5e18429ad32c4c4bc8cdb3&name=' + req.query.name, function(err, response, body) {
            if (err) {
                res.send('There is a error', err);
            } else {
                res.send(body);
            }
        });
    },
    venues: function(req, res) {
        request('http://api.parkwhiz.com/' + req.query.fragment + '?key=cb4a71ff3c5e18429ad32c4c4bc8cdb3', function(err, response, body) {
            if (err) {
                res.send('There is a error', err);
            } else {
                res.send(body);
            }
        });
    }
};
