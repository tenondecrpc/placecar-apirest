var user = require('../controllers/user');

module.exports = function(router) {
    router.get('/users', user.findAll);
    router.get('/users/:id', user.findById);
    router.post('/users', user.create);
    router.put('/users/:id', user.update);
    router.delete('/users/:id', user.delete);

    router.post('/login', user.login);
    router.get('/logout', user.logout);
    
    return router;
};