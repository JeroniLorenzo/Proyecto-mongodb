const Movie = require('../models/movie');

const MoviesController = {};

MoviesController.getAllMovies = async (req, res) => {

    try {

        let result = await Movie.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Sorry, we didn't find any movie." })
        }

    } catch (error) {
        console.log(error);
    }
};

MoviesController.getMovieById = async (req, res) => { 
    const _id = req.body._id;

    try {
        const foundMovies = await Movie.find({_id: _id})
         if(!foundMovies.length){
             res.status(404);
             res.json({error: 'incorrect id'})
         }
        res.send(foundMovies)

    } catch (error) {
        console.log(error);
    }
};

MoviesController.getMovieByTittle = async (req, res) => {

    const tittle = req.body.tittle;

    try {
        const foundMovies = await Movie.find ({tittle: tittle})
           if(!foundMovies.length){
               res.status(404);
               res.json({error: "incorrect tittle"})
          }
        res.send(foundMovies);

    } catch (error) {
        console.log(error);
    }
};

MoviesController.getMovieByGenre = async (req, res) => {

    const genre = req.body.genre;

    try {
        const foundMovies = await Movie.find({genre: genre})
         if(!foundMovies.length){
             res.status(404);
              res.json({error: "incorrect genre"})
         }
            
        res.send(foundMovies)

    } catch (error) {
        console.log(error);
    }
};

MoviesController.getMovieByRating = async (req, res) => {

    const rating = req.body.rating;

    try {
        const foundMovies = await Movie.find ({rating: rating})
        if(rating != 5){
            res.status(404);
            res.json({error: "This movie is not a top rated"})
        }
        res.send(foundMovies)
            

    } catch (error) {
        console.log(error);
    }
};

MoviesController.getMovieByYear = async (req, res) => {

    const year = req.body.year;

    try {
        const foundMovies = await Movie.find ({year: year})
        if(!foundMovies.length){
            res.status(404);
            res.json({error: "Any movie founded with this year"})
        }
        res.send(foundMovies)
            

    } catch (error) {
        console.log(error);
    }
};

MoviesController.newMovie = async (req, res) => {

    try {

        let movie = await Movie.create({
            tittle: req.body.tittle,
            cast: req.body.cast,
            genre: req.body.genre,
            year: req.body.year,
            rating: req.body.rating,
            description: req.body.description
        })

        if (movie) {
            res.send({ "Message": `Movie: ${movie.tittle} has been added successfuly` })
        }

    } catch (error) {
        console.log(error)
    }

};

MoviesController.updateMovie = async (req, res) => {

    let _id = req.body._id;
    let newTittle = req.body.tittle;
    let newCast = req.body.cast;
    let newGenre = req.body.genre;
    let newYear = req.body.year;
    let newRating = req.body.rating;
    let newDescription = req.body.description;

    try {
        let updated = await Movie.findOneAndUpdate(
            //Query de búsqueda....
            { _id: _id },
            //Campos a cambiar
            {
                tittle: newTittle,
                cast: newCast,
                genre: newGenre,
                year: newYear,
                rating: newRating,
                description: newDescription
            }).setOptions({ returnDocument: 'after' })
        //con setOptions en este caso voy a exigir que me devuelva el documento modificado

        if (updated) {
            res.send(`Movie has been updated successfuly`)
        }
    } catch (error) {
        console.log("Error updating movie data", error);
    }
};

MoviesController.deleteMovie = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await Movie.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": `The movie: ${deleted.tittle} has been successfuly deleted` })
        }
    } catch (error) {
        console.log("Error deleting movie", error);

    }
};

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = MoviesController;