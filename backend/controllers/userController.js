const User = require('../models/userModel');

const postLoginUser = async (req, res) => {
    res.status(200).send(req.body)
}

const postSingUpUser = async (req, res) => {
    res.status(200).send(req.body)
}

module.exports = {
    postLoginUser,
    postSingUpUser,
}