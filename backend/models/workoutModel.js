const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: 'string',
        require: true
    },
    reps: {
        type: 'string',
        require: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Workout', workoutSchema);

