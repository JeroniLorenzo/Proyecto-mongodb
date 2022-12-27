
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
        required: true,
    },
    rating : {
        type: Number,
        required: true
    },
    description: {
        type: String

    },
    next7DaysEpisode: {
        type: Boolean
    },
    CinemaOrTheaters:{
        Type: Boolean
    }

});

const Serie = mongoose.model("Serie", seriesSchema);
module.exports = Serie;