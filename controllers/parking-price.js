ParkingPrice = require('../models').ParkingPrice;
var jwt = require('jsonwebtoken');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

module.exports = {
    //Get all
    findAll(req, res) {
        ParkingPrice.findAll()
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Get by id
    findById(req, res) {
        ParkingPrice.findById(req.params.id)
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Create
    create(req, res) {
        ParkingPrice.create(req.body)
        .then(function(result) {
            res.status(200).send(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Edit
    update(req, res) {
        ParkingPrice.update(req.body, {
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
        ParkingPrice.destroy({
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