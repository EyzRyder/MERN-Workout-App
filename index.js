require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require("cors");
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workoutRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = (process.env.PORT || 3000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/user', userRoutes);

app.use('/api/workouts', workoutRoutes);

app.use(express.static(path.join(__dirname, './frontend/dist')));

app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, './frontend/dist/index.html'),
        function (err) {
            res.status(500).send(err);
        }
    );
});

mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}/`));
    })
    .catch((err) => { console.log(err) })


