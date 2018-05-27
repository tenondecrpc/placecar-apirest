var user = require('../controllers/user');
var verifyToken = require('../verify-token');

module.exports = function(router) {
    router.get('/users', verifyToken, user.findAll);
    router.get('/users/:id', verifyToken, user.findById);
    router.post('/users', user.create);
    router.put('/users/:id', verifyToken, user.update);
    router.delete('/users/:id', verifyToken, user.delete);

    router.post('/login', user.login);
    router.get('/logout', user.logout);
    
    return router;
};