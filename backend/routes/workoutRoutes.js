const express = require('express');
const workoutController = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

router.use(requireAuth);

router.get('/', workoutController.getWorkouts);

router.post('/', workoutController.postWorkoutCreate);

router.get('/:id', workoutController.getWorkout);

router.patch('/:id', workoutController.workout_patch);

router.delete('/:id', workoutController.deleteWorkout);

module.exports = router;