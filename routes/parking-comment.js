var parkingComment = require('../controllers/parking-comment');
var verifyToken = require('../verify-token');

module.exports = function(router) {
    router.get('/parkings-comments', verifyToken, parkingComment.findAll);
    router.get('/parkings-comments/:id', verifyToken, parkingComment.findById);
    router.post('/parkings-comments', verifyToken, parkingComment.create);
    router.put('/parkings-comments/:id', verifyToken, parkingComment.update);
    router.delete('/parkings-comments/:id', verifyToken, parkingComment.delete);
    
    return router;
};