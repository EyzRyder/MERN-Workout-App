require('dotenv').config();
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workoutRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/api/user', userRoutes)

app.use('/api/workouts', workoutRoutes)

mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}/`));
    })
    .catch((err) => { console.log(err) })


