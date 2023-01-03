
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema ({
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

});

const Movie = mongoose.model("Movie", moviesSchema);
module.exports = Movie;