const express = require('express');
const app = express();
const db_config = require('./db_config');
const Workouts = require('./models/workouts');
const Programs = require('./models/programs');
const Trainings = require('./models/trainings');
const cors = require('cors');

app.use(cors()); //Grant access to the frontend

//Test DB connection
db_config.authenticate().then(() => {
    console.log('Database is connected.');
}).catch((err) => {
    console.log('Database connected failed: ', err);
});

app.get('/programs', function(req, res){
    Programs.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.get('/workouts', function(req, res){
    Workouts.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});


app.listen(3000, function(){
    console.log('server running on port 3000...');
});
