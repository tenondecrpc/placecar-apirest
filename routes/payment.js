var payment = require('../controllers/payment');
var verifyToken = require('../verify-token');

module.exports = function(router) {
    router.get('/payments', verifyToken, payment.findAll);
    router.get('/payments/:id', verifyToken, payment.findById);
    router.post('/payments', verifyToken, payment.create);
    router.put('/payments/:id', verifyToken, payment.update);
    router.delete('/payments/:id', verifyToken, payment.delete);
    
    return router;
};