//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
 const isAdmin = require('../middlewares/isAdmin');

const UsersController = require('../controllers/UsersController');

//Endpoints

router.post("/newUser", UsersController.newUser);
router.get("/getAll", isAdmin, UsersController.getAllUsers);
router.put("/updateUser", isAdmin, UsersController.updateUser);
router.delete("/deleteUser", isAdmin,UsersController.deleteUser);
router.post("/login", UsersController.loginUser);
router.post("/id", isAdmin, UsersController.postUserById);
router.post("/name", isAdmin, UsersController.postUsersByName);
//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;