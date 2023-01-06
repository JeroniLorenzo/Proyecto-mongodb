# Proyecto Buscador de películas y series.

## Se trata de un proyecto para hacer una base de datos donde he hecho tres colecciones. La de usuarios, movies y series.

### A través de postman hemos de poder hacer CRUD's de las 3 colecciones. Pero solo si un usuario está registrado y logeado podrá acceder a hacer búsquedas específicas en la colección de movies o series.

## Endpoints de la colección usuarios.
- router.get("/getAll", UsersController.getAllUsers); Con la ruta de http://localhost:5500/users/getAll accedermos a ver a todos los usuarios registrados. Al ser un get no vamos a pedir nada por body.

- router.post("/newUser", UsersController.newUser); Con esta ruta: http://localhost:5500/users/newUser accederemos a poder registrar usuarios en la base de datos. En el body del postman vamos a añadir el Nombre, Apellido, Email, Contraseña, Teléfono, Rol y Nombre de usuario.

- router.put("/updateUser", UsersController.updateUser); Con esta otra: http://localhost:5500/users/updateUser, al ser un put actualizaremos los datos del usuario creado. Vamos a pedir el -id del usuario y poner los mismos campos que el endpoint anterior para poder actualizarlo.

- router.delete("/deleteUser", UsersController.deleteUser); Seguimos con otra ruta: http://localhost:5500/users/deleteUser, esta nos servirá para eliminar usuarios de la base de datos. Por body vamos a pedir el _id del usuario a borrar.

- router.post("/id", UsersController.postUserById); Con esta ruta http://localhost:5500/users/id, vamos a poder buscar a usuarios por su id. El id a buscar se lo vamos a pasar por body en  postman. Y nos va a devolver el usuario con el id que le hemos pasado.

- router.post("/name", UsersController.postUserByName); Con esta ruta http://localhost:5500/users/name, vamos a poder buscar a usuarios por su nombre. El nombre a buscar se lo vamos a pasar por body en  postman. Y nos va a devolver los usuarios con el que le hemos pasado.

- router.post("/login", UsersController.loginUser); Y finalmente con esta ruta http://localhost:5500/users/login, vamos a poder logearnos a la base de datos siempre y cuando ya nos hayamos registrado anteriormente. En el body de postman, vamos a pedir el email y la contraseña del usuario que quiera loggearse.

## Endpoints de la colección de Movies. 
- router.get("/getAll", MoviesController.getAllMovies); Con la ruta de http://localhost:5500/movies/getAll accederemos a ver todas las películas registradas en la base de datos. Al ser un get no vamos a pedir nada por body.

- router.post("/newMovie", MoviesController.newMovie); Con la siguiente ruta http://localhost:5500/movies/newMovie accederemos a poder registrar una película nueva a la base de datos. En el body del postman vamos a añadir el título, reparto, director, descripción, género, año y puntuación.

- router.put("/updateMovie", MoviesController.updateMovie); Ahora, con esta ruta http://localhost:5500/movies/updateMovie accedermos a poder actualizar los datos de cualquier película. Por postman vamos a pedir el _id de la película a modificar y vamos a añadir los mismos campos que en el esquema de movies para poder actualizar los datos.

- router.delete("/deleteMovie", MoviesController.deleteMovie); Seguimos con otra ruta, http://localhost:5500/movies/deleteMovie esta vez para eliminar cualquier película creada. Por body vamos a pedir el _id de la película a eliminar.


## Endpoints with middleware (Movies).

- router.post("/rating", auth, MoviesController.postMovieByRating); Con ésta ruta: http://localhost:5500/movies/rating vamos a pedir por body la puntuación máxima (5) y nos va a devolver todas las películas con esa misma puntuación. Al ser 5 la puntuación máxima, si damos otro numero nos saltará un mensaje de error. SOLO VA A FUNCIONAR SI EL USUARIO ESTÁ LOGEADO.

- router.post("/id", auth, MoviesController.postMovieById); Con ésta ruta: http://localhost:5500/movies/id vamos a pedir por body el id y nos va a devolver la película con el id anteriormente pedido. SOLO VA A FUNCIONAR SI EL USUARIO ESTÁ LOGEADO.

- router.post("/tittle", auth, MoviesController.postMovieByTittle); Con ésta ruta: http://localhost:5500/movies/tittle vamos a pedir por body el título y nos va a devolver la película con el título anteriormente pedido. SOLO VA A FUNCIONAR SI EL USUARIO ESTÁ LOGEADO.

- router.post("/director", auth, MoviesController.postMovieByDirector) Con ésta ruta: http://localhost:5500/movies/director vamos a pedir por body el nombre del director y nos va a devolver las películas que haya dirigido ese director anteriormente pedido. SOLO VA A FUNCIONAR SI EL USUARIO ESTÁ LOGEADO.

- router.post("/genre", auth, MoviesController.postMovieByGenre); Con ésta ruta: http://localhost:5500/movies/genre vamos a pedir por body el género de la película y nos va a devolver las películas con el género anteriormente pedido. SOLO VA A FUNCIONAR SI EL USUARIO ESTÁ LOGEADO.

router.post("/year", auth, MoviesController.postMovieByYear); Con ésta ruta: http://localhost:5500/movies/year vamos a pedir por body el año de la película y nos va a devolver las películas que se rodaran en el mismo año. SOLO VA A FUNCIONAR SI EL USUARIO ESTÁ LOGEADO.

## Endpoints de la colección de Series. 
- router.get("/getAll", SeriesController.getAllSeries); Con la ruta de http://localhost:5500/series/getAll accederemos a ver todas las series registradas en la base de datos. Al ser un get no vamos a pedir nada por body.

- router.post("/newSerie", SeriesController.newSerie); Con la siguiente ruta http://localhost:5500/series/newSerie accederemos a poder registrar una serie nueva a la base de datos. En el body del postman vamos a añadir el título, reparto, descripción, género, año, puntuación, episodio semanal y si se puede ver en cines o teatros. 

- router.put("/updateSerie", SeriesController.updateSerie); Ahora, con esta ruta http://localhost:5500/series/updateSerie accedermos a poder actualizar los datos de cualquier serie. Por postman vamos a pedir el _id de la serie a modificar y vamos a añadir los mismos campos que en el esquema de Series para poder actualizar los datos.

- router.delete("/deleteSerie", SeriesController.deleteSerie); Seguimos con otra ruta, http://localhost:5500/series/deleteSerie esta vez para eliminar cualquier serie creada. Por body vamos a pedir el _id de la serie a eliminar.


## Endpoints with middleware (Series).

- router.post("/rating", auth, SeriesController.postSerieByRating); Con ésta ruta: http://localhost:5500/Series/rating vamos a pedir por body la puntuación máxima (5) y nos va a devolver todas las series con esa misma puntuación. Al ser 5 la puntuación máxima, si damos otro numero nos saltará un mensaje de error. SOLO VA A FUNCIONAR SI EL USUARIO ESTÁ LOGEADO.

- router.post("/id", auth, SeriesController.postSerieById); Con ésta ruta: http://localhost:5500/series/id vamos a pedir por body el id y nos va a devolver la serie con el id anteriormente pedido. SOLO VA A FUNCIONAR SI EL USUARIO ESTÁ LOGEADO.

- router.post("/tittle", auth, SeriesController.postSerieByTittle); Con ésta ruta: http://localhost:5500/Series/tittle vamos a pedir por body el título y nos va a devolver la serie con el título anteriormente pedido. SOLO VA A FUNCIONAR SI EL USUARIO ESTÁ LOGEADO.

- router.post("/genre", auth, SeriesController.postSerieByGenre); Con ésta ruta: http://localhost:5500/series/genre vamos a pedir por body el género de la serie y nos va a devolver las series con el género anteriormente pedido. SOLO VA A FUNCIONAR SI EL USUARIO ESTÁ LOGEADO.

- router.post("/weekly", auth, SeriesController.postSerieByWeekly); Con ésta ruta: http://localhost:5500/series/weekly vamos a pedir por body la clave: "next7DaysEpisode con valor: "yes" para que nos devuelva sólo las series que van a tener episodio semanal. SOLO VA A FUNCIONAR SI EL USUARIO ESTÁ LOGEADO.

- router.post("/cinema", auth, SeriesController.postSerieByWeekly); Con ésta ruta: http://localhost:5500/series/cinema vamos a pedir por body la clave: "next7DaysEpisode con valor: "yes" para que nos devuelva sólo las series que van a tener episodio semanal. SOLO VA A FUNCIONAR SI EL USUARIO ESTÁ LOGEADO.

-router.post("/year", auth, SeriesController.postSerieByYear); Con ésta ruta: http://localhost:5500/series/year vamos a pedir por body el año de la serie y nos va a devolver las series que se rodaran en el mismo año. SOLO VA A FUNCIONAR SI EL USUARIO ESTÁ LOGEADO.