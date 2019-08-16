var Flight = require('../models/flight');

module.exports = {
  add,
};

function add(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.destinations.push(req.body);
    flight.save(function(err) {
      res.redirect(`/flights`);
    });
  });
}