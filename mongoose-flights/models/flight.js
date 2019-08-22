var mongoose = require('mongoose');

var Schema = mongoose.Schema;



var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: {
        type: Date
    }
});

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: () => Date.now() + 366 * 24 * 60 * 60 * 1000       // MUST UPDATE TO 'ONE YEAR FROM DATE CREATED'
    },
    airport: {
        type: String,
        enum: ['ATX', 'DAL', 'LAX', 'SEA']
    },
    destinations: [destinationSchema]
});


// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);