const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Staff = require('./models/staffSchema');
const staffRoute = require('./routes/staffRouter');

const app = express();
const port = 5000;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to mongdoDB
const dbURL = 'mongodb+srv://sa:12345@cluster0.rmyvlp2.mongodb.net/dbPetSpa?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURL)
    .then((result) => {
        app.listen(port),
        console.log(`Server is running at port ${port}`),
        console.log('Connected to mongodb atlas')
    })
    .catch((err) => console.log(err));


app.get('/', (req, res) => {
    res.send('<h1>Welcome back</h1>');
});

app.use('/staffs', staffRoute);