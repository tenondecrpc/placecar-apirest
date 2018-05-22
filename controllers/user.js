User = require('../models').User;
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

module.exports = {
    //Get all
    findAll(req, res) {
        User.findAll()
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Get by id
    findById(req, res) {
        User.findById(req.params.id)
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Create
    create(req, res) {
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);
        User.create({
            name : req.body.name,
            email : req.body.email,
            password : hashedPassword,
            phone: req.body.phone
        })
        .then(function(result) {
            // if user is registered without errors
            // create a token
            var token = jwt.sign({ id: result.id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Edit
    update(req, res) {
        User.update(req.body, {
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
        User.destroy({
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
    //Login
    login(req, res) {
        User.findOne({
            where: {
                email: req.body.email.toString().toLowerCase()
            }
        })
        .then(function (user) {
            if (!user) {
                res.status(404).json({mensaje:"No user found."});
            } else {
                var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);       
                if (passwordIsValid) {
                    // if user is found and password is valid
                    // create a token
                    var token = jwt.sign({ id: user.id }, config.secret, {
                        expiresIn: 86400 // expires in 24 hours
                    });
        
                    // return the information including token as JSON
                    res.status(200).send({ auth: true, token: token });
                } else {
                    res.status(401).send({ auth: false, token: null });
                }
            }
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
    },
    //Logout
    logout(req, res) {
        res.status(200).send({ auth: false, token: null });
    },
};
