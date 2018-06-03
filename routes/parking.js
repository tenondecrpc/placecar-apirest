var parking = require('../controllers/parking');
var verifyToken = require('../verify-token');

module.exports = function(router) {
    router.get('/parkings', verifyToken, parking.findAll);
    router.get('/parkings/:id', verifyToken, parking.findById);
    router.post('/parkings', verifyToken, parking.create);
    router.put('/parkings/:id', verifyToken, parking.update);
    router.delete('/parkings/:id', verifyToken, parking.delete);

    router.get('/parkings/city/:id', verifyToken, parking.findAllByCity);
    router.get('/parkings/:id/details', verifyToken, parking.findAllDetails);
    
    return router;
};