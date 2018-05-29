var parkingPrice = require('../controllers/parking-price');
var verifyToken = require('../verify-token');

module.exports = function(router) {
    router.get('/parkings-prices', verifyToken, parkingPrice.findAll);
    router.get('/parkings-prices/:id', verifyToken, parkingPrice.findById);
    router.post('/parkings-prices', verifyToken, parkingPrice.create);
    router.put('/parkings-prices/:id', verifyToken, parkingPrice.update);
    router.delete('/parkings-prices/:id', verifyToken, parkingPrice.delete);
    
    return router;
};