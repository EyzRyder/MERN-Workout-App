const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

//static singup method

userSchema.statics.signup = async function (email, password) {

    //validation 
    if (!email || !password) {
        throw new Error('All fields must be filled');
    }

    if (!validator.isEmail(email)) {
        throw new Error('Email is not valid');
    }

    if (!validator.isStrongPassword(password)) {
        throw new Error('Password is not strong enough, make sure that you putted an uppercase and lowercase letters, number and a special characters');
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw new Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user
}
//static login method

userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw new Error('All fields must be filled');
    }

    const user = await this.findOne({ email })

    if (!user) {
        throw new Error('Incorrect email');
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw new Error('Incorrect password');
    }

    return user
}

module.exports = mongoose.model('User', userSchema);
