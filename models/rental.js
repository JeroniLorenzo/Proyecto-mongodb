const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentalSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    serieId: {
        type: Schema.Types.ObjectId, ref: 'Serie',
        required: true
    },
    fechaInicio: {
        type: String
    },
    fechaFin: {
        type: String
    },
    importe: { 
        type: String
    }

});

const Rental = mongoose.model("Rental", rentalSchema);
module.exports = Rental;