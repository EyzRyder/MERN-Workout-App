const User = require('../models/userModel');

const postLoginUser = async (req, res) => {
    res.status(200).send(req.body)
}

const postSingUpUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);
        
        res.status(200).json({email, user});
    } catch (error) {
        res.status(400).json({ "error": error.message });
    }
}

module.exports = {
    postLoginUser,
    postSingUpUser,
}