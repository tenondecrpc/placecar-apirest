module.exports = {
    //Order
    orderNew(req, res) {
        //Data
        var crypto = require('crypto')
        var shasum = crypto.createHash('sha1');
        shasum.update('24431c83a662c88fbfbac898983155da' + '3652' + '1000');
        var token = shasum.digest('hex');
        var order = {
            "token": token,
            "comprador": {
              "ruc": "4247903-7",
              "email": "cristianramonpaniagua@gmail.com",
              "ciudad": null,
              "nombre": "Rudolph Goetz",
              "telefono": "0973436966",
              "direccion": "",
              "documento": "4247903",
              "coordenadas": "",
              "razon_social": "Rudolph Goetz",
              "tipo_documento": "CI",
              "direccion_referencia": null
            },
            "public_key": "74d7930a236e293874b7bf40ab441a14",
            "monto_total": 1000,
            "tipo_pedido": "VENTA-COMERCIO",
            "compras_items": [
              {
                "ciudad": "1",
                "nombre": "Ticket virtual a evento Ejemplo 2017",
                "cantidad": 1,
                "categoria": "909",
                "public_key": "74d7930a236e293874b7bf40ab441a14",
                "url_imagen": "http://www.fernandogoetz.com/d7/wordpress/wp-content/uploads/2017/10/ticket.png", 
                "descripcion": "Ticket virtual a evento Ejemplo 2017",
                "id_producto": 895,
                "precio_total": 1000,
                "vendedor_telefono": "0973436966",
                "vendedor_direccion": "",
                "vendedor_direccion_referencia": "",
                "vendedor_direccion_coordenadas": ""
              }
            ],
            "fecha_maxima_pago": "2018-09-04 14:14:48",
            "id_pedido_comercio": "3652",
            "descripcion_resumen": ""
          };
          //Post
          var request = require('request');

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
    },
};