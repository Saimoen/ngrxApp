const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

router.post('/', (req, res) => {
    const newUser = new User({
        email: req.body.email,
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8)),
    });
    newUser.save(err => {
        if (err) {
            return res.status(400).json("L'inscription a échoué");
        } else {
            res.json('Inscription ok !');
        }
    });
});

module.exports = router;