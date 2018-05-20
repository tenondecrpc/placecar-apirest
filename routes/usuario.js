var usuario = require('../controllers/usuario');

module.exports = function(router) {
    router.get('/usuarios', usuario.index);
    router.get('/usuarios/:id', usuario.show);
    router.post('/usuarios', usuario.create);
    router.put('/usuarios/:id', usuario.update);
    router.delete('/usuarios/:id', usuario.delete);

    return router;
};