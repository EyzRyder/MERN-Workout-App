const express = require('express');
const workoutController = require('../controllers/workoutController');
const router = express.Router();

//  blog routes

router.get('/', workoutController.getWorkouts);

router.post('/', workoutController.postWorkoutCreate);

router.get('/:id', workoutController.getWorkout);

router.patch('/:id', workoutController.workout_patch);

router.delete('/:id', workoutController.deleteWorkout);

module.exports = router;