const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentalSchema = new Schema ({
    user_id: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    serie_id: {
        type: Schema.Types.ObjectId, ref: 'Serie',
        required: true
    },
    fechaInicio: {
        type: Date
    },
    fechaFin: {
        type: Date
    },
    importe: { 
        type: Number
    }

});

const Rental = mongoose.model("Rental", rentalSchema);
module.exports = Rental;