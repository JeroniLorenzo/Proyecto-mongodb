
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
    director: {
        type: String
    },
    description: {
        type: String

    },
    genre:{
        type: Array
    },
    year : {
        type: Number,
        
    },
    rating : {
        type: Number,
        
    },
    
    next7DaysEpisode: {
        type: String
    },
    cinemaOrTheater:{
        type: String
    }

});

const Serie = mongoose.model("Serie", seriesSchema);
module.exports = Serie;