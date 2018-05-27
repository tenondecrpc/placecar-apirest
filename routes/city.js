var city = require('../controllers/city');
var verifyToken = require('../verify-token');

module.exports = function(router) {
    router.get('/cities', verifyToken, city.findAll);
    router.get('/cities/:id', verifyToken, city.findById);
    router.post('/cities', verifyToken, city.create);
    router.put('/cities/:id', verifyToken, city.update);
    router.delete('/cities/:id', verifyToken, city.delete);
    
    return router;
};