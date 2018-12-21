Reservation = require('../models').Reservation;
var crypto = require('crypto')
var request = require('request');

module.exports = {
    //Get all
    findAll(req, res) {
        Reservation.findAll()
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Get by id
    findById(req, res) {
        Reservation.findById(req.params.id)
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Create
    create(req, res) {
        Reservation.create(req.body)
            .then(function (result) {
                // res.status(200).send(result);
                //Data
                var shasum = crypto.createHash('sha1');
                shasum.update('32ccdffcf977231bda77f6f83e28ce17' + result.id + '5000');
                var token = shasum.digest('hex');
                var order = {
                    "token": token,
                    "comprador": {
                        "ruc": "4175744-0",
                        "email": "cristianramonpaniagua@gmail.com",
                        "ciudad": null,
                        "nombre": "Cristian Paniagua",
                        "telefono": "0973436966",
                        "direccion": "",
                        "documento": "4175744",
                        "coordenadas": "",
                        "razon_social": "Cristian Paniagua",
                        "tipo_documento": "CI",
                        "direccion_referencia": null
                    },
                    "public_key": "b7f310d25650a193124e91a30a60c850",
                    "monto_total": 5000,
                    "tipo_pedido": "VENTA-COMERCIO",
                    "compras_items": [
                        {
                            "ciudad": "1",
                            "nombre": "Estadia de Estacionamiento",
                            "cantidad": 1,
                            "categoria": "909",
                            "public_key": "b7f310d25650a193124e91a30a60c850",
                            "url_imagen": "http://www.fernandogoetz.com/d7/wordpress/wp-content/uploads/2017/10/ticket.png",
                            "descripcion": "Estadia de Estacionamiento",
                            "id_producto": 1,
                            "precio_total": 5000,
                            "vendedor_telefono": "0973436966",
                            "vendedor_direccion": "",
                            "vendedor_direccion_referencia": "",
                            "vendedor_direccion_coordenadas": ""
                        }
                    ],
                    "fecha_maxima_pago": "2018-12-31 14:14:00",
                    "id_pedido_comercio": result.id,
                    "descripcion_resumen": ""
                };
                //Post
                request({
                    url: "https://api.pagopar.com/api/comercios/1.1/iniciar-transaccion",
                    method: "POST",
                    json: true,   // <--Very important!!!
                    body: order
                }, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        res.status(200).json(response);
                    } else {
                        res.status(500).json(err);
                    }
                });
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    },
    //Edit
    update(req, res) {
        Reservation.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Delete
    delete(req, res) {
        Reservation.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
};