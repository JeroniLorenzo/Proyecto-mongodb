//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
// const isAdmin = require('../middlewares/isAdmin');

const UsersController = require('../controllers/UsersController');

//Endpoints

router.post("/newUser", UsersController.newUser);
router.get("/getAll", UsersController.getAllUsers);
router.put("/updateUser", UsersController.updateUser);
router.delete("/deleteUser", UsersController.deleteUser);
router.post("/login", UsersController.loginUser);
router.post("/id", UsersController.postUserById);
router.post("/name", UsersController.postUsersByName);
//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;