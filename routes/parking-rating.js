var parkingRating = require('../controllers/parking-rating');
var verifyToken = require('../verify-token');

module.exports = function(router) {
    router.get('/parkings-ratings', verifyToken, parkingRating.findAll);
    router.get('/parkings-ratings/:id', verifyToken, parkingRating.findById);
    router.post('/parkings-ratings', verifyToken, parkingRating.create);
    router.put('/parkings-ratings/:id', verifyToken, parkingRating.update);
    router.delete('/parkings-ratings/:id', verifyToken, parkingRating.delete);
    
    return router;
};