Parking = require('../models').Parking;
ParkingImage = require('../models').ParkingImage;
ParkingPrice = require('../models').ParkingPrice;
ParkingComment = require('../models').ParkingComment;
ParkingRating = require('../models').ParkingRating;
var jwt = require('jsonwebtoken');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var sequelize = require('sequelize');

module.exports = {
    //Get all
    findAll(req, res) {
        Parking.findAll()
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Get by id
    findById(req, res) {
        Parking.findById(req.params.id)
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Create
    create(req, res) {
        Parking.create(req.body)
        .then(function(result) {
            res.status(200).send(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Edit
    update(req, res) {
        Parking.update(req.body, {
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
        Parking.destroy({
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
    //Get all by City
    findAllByCity(req, res) {
        Parking.findAll({
            where: {
              cityId: req.params.id
            }
        })
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Get all detail
    
    findAllDetails(req, res) {
        Parking.hasMany(ParkingImage, {foreignKey: 'parking_id'});
        // ParkingImage.belongsTo(Parking, {foreignKey: 'parking_id', as:'ParkingImages'});
        Parking.hasMany(ParkingPrice, {foreignKey: 'parking_id'});
        Parking.hasMany(ParkingComment, {foreignKey: 'parking_id'});
        Parking.hasMany(ParkingRating, {foreignKey: 'parking_id'});
        Parking.findAll({
            include: [
                {
                    model: ParkingImage,
                    // as: 'ParkingImages',
                    // where: { parkingId: req.params.id },
                    // required: true, -- inner join (false is left join)
                },
                {
                    model: ParkingPrice,
                    // as: 'ParkingPrices',
                },
                {
                    model: ParkingComment,
                    // as: 'ParkingComments',
                },
                {
                    model: ParkingRating,
                    // as: 'ParkingRatings',
                },
            ],
            //Remove where you want to bring the list of all objects
            where: {
                id: req.params.id,
            },
        })
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
};