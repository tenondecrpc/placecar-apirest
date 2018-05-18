var usuario = require('../controllers/usuario');

// Todas las rutas de la aplicacion deben ser definidos en este archivo
module.exports = function(router) {
    // usuario
    router.get('/usuarios', usuario.index);
    router.get('/usuarios/:id', usuario.show);
    router.post('/usuarios', usuario.create);
    router.put('/usuarios/:id', usuario.update);
    router.delete('/usuarios/:id', usuario.delete);

    //Otros

    return router;
};