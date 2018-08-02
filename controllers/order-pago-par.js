module.exports = {
    //Order
    orderNew(req, res) {
        //Data
        var crypto = require('crypto')
        var shasum = crypto.createHash('sha1');
        shasum.update('24431c83a662c88fbfbac898983155da' + '3' + '5000');
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
            "public_key": "74d7930a236e293874b7bf40ab441a14",
            "monto_total": 5000,
            "tipo_pedido": "VENTA-COMERCIO",
            "compras_items": [
              {
                "ciudad": "1",
                "nombre": "Estadia de Estacionamiento",
                "cantidad": 1,
                "categoria": "909",
                "public_key": "74d7930a236e293874b7bf40ab441a14",
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
            "fecha_maxima_pago": "2018-09-01 14:14:00",
            "id_pedido_comercio": "3",
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