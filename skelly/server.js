'use strict';

//Dependencies
const express = require('express');
const pg = require('pg');

//ENV
require('dotenv').config();

//APP
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));

//DATABASE SETUP
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

//ENGINE
app.set('view engine', 'ejs');

//routes
app.get('/', getData);
app.get('/data/:data_id', getDataInstance);
app.get('/add', showForm);
app.get('*', (req, res) => res.status(404).send('NOT FOUND :('));
app.listen(PORT, () => console.lot(`Listening on ${PORT}`)):

//HELPER FUNC
function getData(request, response) {
    let SQL = 'SELECT * FROM data;';
    return client.query(SQL)
    .then(results => response.render('index', {results: results.rows}))
    .catch(handleError);
}
function getDataInstance(request, response) {
    console.log(request.params.data_id)

    let SQL = 'SELECT * FROM data WHERE id=$1;';
    let values = [request.params.data_id];

    return client.query(SQL, values)
    .then(result => {
        console.log('single', results.rows[0]);
    })
    .catch(err => handleError(err, response));
}
function handleError(error, response) {
    response.render('pages/error-view', {error:'Uh Oh'});
}