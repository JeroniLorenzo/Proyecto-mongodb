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
}

MoviesController.getMovieById = async (req, res) => {

    //Este id es el id que ha venido por parámetro en el endpoint (url)
    let _id = req.params._id;
    let movie = req.movie.movie[0];

    //Estos datos de movie son lo que el middleware auth ha decodificado del token ;)
    if (_id !== movie._id) {

        res.send({ "Msg": "Denied acces" });
    } else {

        res.send({

            "id": movie._id,
            "tittle": movie.tittle,
            "cast": movie.cast,
            "year": movie.year,
            "description": movie.description,

        });
    }
}

MoviesController.getMovieByTittle = async (req, res) => {

    let tittle = req.body.tittle;

    try {

        await Movie.find({
            tittle: tittle
        })
            .then(foundMovies => {
                res.send(foundMovies)
            })

    } catch (error) {
        console.log(error);
    }
}

MoviesController.getMovieByGenre = async (req, res) => {

    let tittle = req.body.tittle;
    let genre = req.body.genre;

    try {

        await Movie.find({
            tittle: tittle,
            genre: genre

        })
            .then(foundMovies => {
                res.send(foundMovies)
            })

    } catch (error) {
        console.log(error);
    }
}

MoviesController.getMovieByRating = async (req, res) => {

    let rating = req.body.rating;

    try {

        await Movie.find({
            rating: rating
        })
            .then(foundMovies => {
                res.send(foundMovies)
            })

    } catch (error) {
        console.log(error);
    }
}

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
            res.send(`Movie has been update successfuly`)
        }
    } catch (error) {
        console.log("Error updating movie data", error);
    }
}

MoviesController.deleteMovie = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await Movie.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": `The movie: ${deleted.name} ${deleted.surname} has been successfuly deleted` })
        }
    } catch (error) {
        console.log("Error deleting movie", error);

    }
};

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = MoviesController;