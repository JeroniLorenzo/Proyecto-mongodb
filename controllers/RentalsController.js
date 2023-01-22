const Rental = require('../models/rental');

const RentalsController = {};


RentalsController.getAllRentals = async (req, res) => {

    try {

        let result = await Rental.find({})
            .populate('user_id')
            .populate('serie_id');

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún alquiler." })
        }

    } catch (error) {
        console.log(error);
    }
}


RentalsController.newRental = async (req, res) => {

    try {

        let user = await Rental.create({
            userId: req.body.user_id,
            serieId: req.body.serie_id,
            fechaInicio: req.body.fechaInicio,
            fechaFin: req.body.fechaFin,
            importe: req.body.importe
        })

        if (user) {

            res.send({ "Message": `El alquiler ha sido un éxito` });

        }else {

            res.send({ "Message": `Ha habido un error en el alquiler` });

        }

    } catch (error) {
        console.log(error)
    }

};

module.exports = RentalsController;