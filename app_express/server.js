const express = require('express');
const DB_URL = '18.221.70.83:27000/test-affinis-medicalcore?auto_reconnect=true';
const MONGO_USR = 'affinis';
const MONGO_PASS = 'S1metric4#2018AF';

const app = express();

const db = require('monk')(`${MONGO_USR}:${MONGO_PASS}@${DB_URL}`);

const users = db.get('EMPLEADO_DEV');

const elMidleware = function name(req, res, next) {

    // Todo n cosas 

    next();
};

users.find({})
    .then((results) => {
        let datos = results;
    })
    .catch((err) => {

    });



app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, () => {
    console.log('App is running!');
});


// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// }).post('/',(req, res) => {
//     console.log('http://localhost:3000/');
//     res.send('asdasd');
// });

app.use('/apiget', elMidleware);

app.get('/apiget', (req, res) => {
    res.send('get')
}).post((req, res) => {
    res.send('post')
})

