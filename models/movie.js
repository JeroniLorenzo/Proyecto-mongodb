
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
    

});

const Movie = mongoose.model("Movie", moviesSchema);
module.exports = Movie;