var Flight = require('../models/flight');
var Ticket = require('../models/ticket');


module.exports = {
    new: newTicket,
    add
}


function newTicket(req, res){
    Flight.findById(req.params.id, function(err, flight){
        Ticket.find({flight: flight._id}, function(err, tickets){
            res.render('tickets/tickets', {
                title: 'Add Ticket',
                tickets,
                flight
            })
        });
    });
}



function add(req, res){
    // console.log('its working')
    Flight.findById(req.params.id, function(err, flight){
        req.body.flight = flight._id;
        var ticket = new Ticket(req.body);
        ticket.save(function(err){
            if(err) return res.redirect('back')
            res.redirect(`/flights/${flight._id}`)
        });
    });

}