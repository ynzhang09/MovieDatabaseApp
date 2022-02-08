const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: "Bob", lastName: "Brown"}
    ];
    res.json(customers);
});


const animeRouter = require('./routes/anime');
const usersRouter = require('./routes/users');

app.use('/api/anime', animeRouter);
app.use('/api/users', usersRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));