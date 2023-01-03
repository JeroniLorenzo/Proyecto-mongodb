
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seriesSchema = new Schema ({
    tittle: {
        type: String,
        required: true
    },
    cast: {
        type: String
    },
    genre:{
        type: String
    },
    year : {
        type: Number,
        
    },
    rating : {
        type: Number,
        
    },
    description: {
        type: String

    },
    next7DaysEpisode: {
        type: String
    },
    cinemaOrTheaters:{
        Type: String
    }

});

const Serie = mongoose.model("Serie", seriesSchema);
module.exports = Serie;