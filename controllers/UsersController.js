const User = require('../models/user');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const authConfig = require('../config/auth');

const UsersController = {};

UsersController.getAllUsers = async (req, res) => {

    try {

        let result = await User.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún usuario." })
        }

    } catch (error) {
        console.log(error);
    }
};

UsersController.getUserById = async (req, res) => {

    //Este id es el id que ha venido por parámetro en el endpoint (url)
    let _id = req.params._id;
    let user = req.user.usuario[0];

    //Estos datos de user son lo que el middleware auth ha decodificado del token ;)
    if (_id !== user._id) {

        res.send({ "Msg": "Acceso no autorizado" });
    } else {

        res.send({

            "id": user._id,
            "name": user.name,
            "surname": user.surname,
            "email": user.email,
            "phone": user.phone,
            "rol": user.rol,
            "nickname": user.nickname

        });
    }
};

UsersController.getUsersByName = async (req, res) => {

    let name = req.body.name;

    try {

        await User.find({
            name: name
        })
            .then(foundUsers => {
                res.send(foundUsers)
            })

    } catch (error) {
        console.log(error);
    }
};

UsersController.newUser = async (req, res) => {

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));

    try {

        let user = await User.create({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: password,
            phone: req.body.phone,
            rol: req.body.rol,
            nickname: req.body.nickname
        })

        if (user) {
            res.send({ "Message": `User ${user.name} has been successfuly added` })
        }

    } catch (error) {
        console.log(error)
    }

};

UsersController.updateUser = async (req, res) => {

    let _id = req.body._id;
    let newName = req.body.name;
    let newSurname = req.body.surname;
    let newEmail = req.body.email;
    let newPassword = req.body.password;
    let newPhone = req.body.phone;
    let newRol = req.body.rol;
    let newNickname = req.body.nickname;

    try {
        let updated = await User.findOneAndUpdate(
            //Query de búsqueda....
            { _id: _id },
            //Campos a cambiar
            {
                name: newName,
                surname: newSurname,
                email: newEmail,
                password: newPassword,
                phone: newPhone,
                rol: newRol,
                nickname: newNickname
            }).setOptions({ returnDocument: 'after' })
        //con setOptions en este caso voy a exigir que me devuelva el documento modificado

        if (updated) {
            res.send(`Updated user successfuly`)
        }
    } catch (error) {
        console.log("Error updating user data", error);
    }
};

UsersController.deleteUser = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await User.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": `User ${deleted.name} ${deleted.surname} has been removed successfuly` })
        }
    } catch (error) {
        console.log("Error deleting user", error);

    }
};

UsersController.loginUser = async (req, res) => {

    try {

        let userFound = await User.find({
            email: req.body.email
        })

        
        if (userFound) {
            
            if (userFound[0].email === undefined) {
                //No hemos encontrado al usuario...mandamos un mensaje
                res.send("Incorrect pass");
            } else {
               
                //Hemos encontrado al usuario, vamos a ver si el pass es correcto
               
                if (bcrypt.compareSync(req.body.password, userFound[0].password)) {
                    console.log(userFound[0])
                    let token = jsonwebtoken.sign( {id:userFound[0]._id, rol:userFound[0].rol } , authConfig.SECRET, {
                        expiresIn: authConfig.EXPIRES
                    });
                

                    let loginOk = `Welcome back ${userFound[0].name}`;
                    res.json({
                        loginOk,
                        //user: userFound,
                        token: token
                    })

                } else {
              
                    res.send("Incorrect pass");
                }
            }

        }


    } catch (error) {
        res.send("Incorrect params");
    }
};

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = UsersController;