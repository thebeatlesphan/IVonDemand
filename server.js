const express = require('express.js');
const path = require('path');
const bodyParser = require('body-parser'); //body-parser allow us to send and recieve data
const knex = require(knex); //knew will allow us to access our database 

const app = express();

let intialPath = path.join(__dirname, "public");

app.use(bodyParser.json);
app.use(express.static(intialPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(intialPath, "index.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(intialPath, "login.html"));
})

app.listen(3000, (req, res) => {
    console.log('listening on port 3000....')
})