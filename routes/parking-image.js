var parkingImage = require('../controllers/parking-image');
var verifyToken = require('../verify-token');

module.exports = function(router) {
    router.get('/parkings-images', verifyToken, parkingImage.findAll);
    router.get('/parkings-images/:id', verifyToken, parkingImage.findById);
    router.post('/parkings-images', verifyToken, parkingImage.create);
    router.put('/parkings-images/:id', verifyToken, parkingImage.update);
    router.delete('/parkings-images/:id', verifyToken, parkingImage.delete);
    
    return router;
};