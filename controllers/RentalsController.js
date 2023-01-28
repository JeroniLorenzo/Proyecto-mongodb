const Rental = require('../models/rental');

const RentalsController = {};


RentalsController.getAllRentals = async (req, res) => {

    try {

        let result = await Rental.find({})
            .populate('userId')
            .populate('serieId');

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
console.log(req.body)
console.log()
    try {

        let user = await Rental.create({
            userId: req.body.idUser,
            serieId: req.body.idSerie,
            fechaInicio: req.body.rentalDate,
            fechaFin: req.body.returnDate,
            importe: req.body.importe
        })

        if (user) {

            res.send( {"data": `El alquiler ha sido un éxito`});

        }else {

            res.send({ "data": `Ha habido un error en el alquiler` });

        }

    } catch (error) {
        console.log(error)
    }

};

module.exports = RentalsController;