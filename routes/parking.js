var parking = require('../controllers/parking');
var verifyToken = require('../verify-token');

module.exports = function(router) {
    router.get('/parkings', verifyToken, parking.findAll);
    router.get('/parkings/:id', verifyToken, parking.findById);
    router.post('/parkings', verifyToken, parking.create);
    router.put('/parkings/:id', verifyToken, parking.update);
    router.delete('/parkings/:id', verifyToken, parking.delete);
    
    return router;
};