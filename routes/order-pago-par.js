var orderPagoPar = require('../controllers/order-pago-par');
var verifyToken = require('../verify-token');

module.exports = function(router) {
    router.post('/order-pago-par', verifyToken, orderPagoPar.orderNew);
    
    return router;
};