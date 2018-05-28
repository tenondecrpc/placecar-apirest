var reservation = require('../controllers/reservation');
var verifyToken = require('../verify-token');

module.exports = function(router) {
    router.get('/reservations', verifyToken, reservation.findAll);
    router.get('/reservations/:id', verifyToken, reservation.findById);
    router.post('/reservations', verifyToken, reservation.create);
    router.put('/reservations/:id', verifyToken, reservation.update);
    router.delete('/reservations/:id', verifyToken, reservation.delete);
    
    return router;
};