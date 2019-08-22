var Flight = require('../models/flight');
var Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show,
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            flights, 
            title: 'Flights'
        });
    });
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'Add Flight'});
}

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err){
        res.redirect('/flights');
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      Ticket.find({flight: flight._id}, function(err, tickets){
        res.render('flights/show', { title: 'Flight Detail', flight , tickets});

      })
    });
  }

// function addDes(req, res) {
//     // var des = Flight.destinations(req.body);
//     // des.save(function(err){
//         res.redirect(`/flights/${req.params.id}/show`);
//     // });
// }