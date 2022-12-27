const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

const getWorkouts = async (req, res) => {
    const user_id = req.user._id

    const workouts = await Workout
        .find({ user_id })
        .sort({ created_at: -1});

    res.status(200).send(workouts)
}

const postWorkoutCreate = async (req, res) => {
    const { title, reps } = req.body
    let emptyFields = []
    if (!title) {
        emptyFields.push('title')
    }
    if (!reps) {
        emptyFields.push('reps')
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({error:'Please fill in all the fields', emptyFields})
    }
    try {
        const user_id = req.user._id;
        const workout = await Workout.create({ title, reps, user_id });
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }

}

const getWorkout = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'There is no workout' })
    }
    const workout = await Workout
        .findById(id);

    if (!workout) {
        return res.status(404).json({ error: 'There is no workout' })
    }
    res.status(200).send(workout)


}

const workout_patch = async(req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'There is no workout' })
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
    
    if (!workout) {
        return res.status(400).json({ error: err.message });
    }
    
    res.status(200).json(workout);
}

const deleteWorkout = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'There is no workout' })
    }

    const workout = await Workout.findByIdAndDelete(id);

    if (!workout) {
        return res.status(400).json({ error: err.message });
    }

    res.status(200).json(workout);
}



module.exports = {
    getWorkouts,
    postWorkoutCreate,
    getWorkout,
    workout_patch,
    deleteWorkout
}