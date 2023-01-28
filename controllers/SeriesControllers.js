const Serie = require('../models/serie');
const mongoose = require('mongoose')
const SeriesController = {};

SeriesController.getAllSeries = async (req, res) => {

    try {

        let foundSeries = await Serie.find({});

        if (foundSeries.length > 0) {
            res.send(foundSeries)
        } else {
            res.send({ "Message": "Sorry, we didn't find any serie." })
        }

    } catch (error) {
        console.log(error);
    }
};

SeriesController.postSerieById = async (req, res) => {
    const _id = req.body._id;

if (!mongoose.Types.ObjectId.isValid(_id)) {
  res.status(400);
  res.json({error: 'invalid id'});
  return;
}
try {
  const foundSeries = await Serie.find({_id: _id});
  res.send(foundSeries);
} catch (error) {
  console.log(error);
}
};

SeriesController.getSerieByTittle = async (req, res) => {

    const tittle = req.params.tittle;
    
    try {
      const foundSeries = await Serie.find({"tittle": { "$regex": tittle, "$options": "i" }});
      if(!foundSeries.length){
        res.status(404);
        res.json({error: 'This title is not in our data base'});
        return;
      }
      res.send(foundSeries);
    } catch (error) {
      console.log(error);
    }
};

SeriesController.postSerieByRating = async (req, res) => {

    const rating = req.body.rating;

    try {
        const foundSeries = await Serie.find({rating: rating})
         if(rating != 5){
             res.status(404);
             res.json({error: 'This serie is not a top rated serie'})
         }
        res.send(foundSeries)

    } catch (error) {
        console.log(error);
    }
};

SeriesController.postSerieByWeekly = async (req, res) => {

    const next7DaysEpisode = req.body.next7DaysEpisode;

    try {
        const foundSeries = await Serie.find({next7DaysEpisode: next7DaysEpisode})
        if(next7DaysEpisode != "yes"  ){
            res.status(404);
            res.json({error: "This serie doesn't have a weekly episode"})
        }
        res.send(foundSeries)

    } catch (error) {
        console.log(error);
    }
};

SeriesController.postSerieByGenre = async (req, res) => {
    const genre = req.body.genre;
    
    try {
      const foundSeries = await Serie.find({genre: genre});
      if(!foundSeries.length){
        res.status(404);
        res.json({error: 'This genre is not in our basa date'});
        return;
      }
      res.send(foundSeries);
    } catch (error) {
      console.log(error);
    }
};

SeriesController.postSerieByYear = async (req, res) => {

    const year = req.body.year;

    try {
        const foundSeries = await Serie.find ({year: year})
        if(!foundSeries.length){
            res.status(404);
            res.json({error: "Any Serie founded with this year"})
        }
        res.send(foundSeries)
            

    } catch (error) {
        console.log(error);
    }
};

SeriesController.postSerieByCinemaOrTheater = async (req, res) => {

    const cinemaOrTheater = req.body.cinemaOrTheater;

    try {
        const foundSeries = await Serie.find({cinemaOrTheater: cinemaOrTheater})
        if(cinemaOrTheater != "yes"  ){
            res.status(404);
            res.json({error: "This serie doesn't has a Cinema or Theater pass"})
        }
        res.send(foundSeries)

    } catch (error) {
        console.log(error);
    }
};

SeriesController.newSerie = async (req, res) => {

    try {

        let serie = await Serie.create({
            tittle: req.body.tittle,
            cast: req.body.cast,
            director: req.body.director,
            description: req.body.description,
            genre: req.body.genre,
            year: req.body.year,
            rating: req.body.rating,
            next7DaysEpisode: req.body.next7DaysEpisode,
            cinemaOrTheater: req.body.cinemaOrTheater
        })

        if (serie) {
            res.send({ "Message": `Serie: ${serie.tittle} has been added successfuly` })
        }

    } catch (error) {
        console.log(error)
    }

};

SeriesController.updateSerie = async (req, res) => {

    let _id = req.body._id;
    let newTittle = req.body.tittle;
    let newCast = req.body.cast;
    let newDirector = req.body.director;
    let newDescription = req.body.description;
    let newGenre = req.body.genre;
    let newYear = req.body.year;
    let newRating = req.body.rating;
    
    let newNext7Days = req.body.next7Days;
    let newCinemaOrTheater = req.body.cinemaOrTheater;

    try {
        let updated = await Serie.findOneAndUpdate(
            //Query de búsqueda....
            { _id: _id },
            //Campos a cambiar
            {
                tittle: newTittle,
                cast: newCast,
                director: newDirector,
                description: newDescription,
                genre: newGenre,
                year: newYear,
                rating: newRating,
                
                next7Days: newNext7Days,
                cinemaOrTheater: newCinemaOrTheater
            }).setOptions({ returnDocument: 'after' })
        //con setOptions en este caso voy a exigir que me devuelva el documento modificado

        if (updated) {
            res.send(`The serie ${updated.tittle} has been update successfuly`)
        }
    } catch (error) {
        console.log("Error updating serie data", error);
    }
}

SeriesController.deleteSerie = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await Serie.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": `The serie: ${deleted.tittle} has been successfuly deleted` })
        }
    } catch (error) {
        console.log("Error deleting serie", error);

    }
};

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = SeriesController;