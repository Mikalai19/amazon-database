const { Macbook } = require('./models');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;
const layouts = require('express-ejs-layouts');

app.set('view engine', 'ejs'); // for our view (html like pages), we want to use 
app.use(layouts);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.json({ message: 'Welcome to Amazon' });
});

app.get('/macbooks', function (req, res) {


    Macbook.findAll()
        .then(function (macbookList) {
            console.log('FOUND ALL ARTIST', macbookList);
            res.render('macbooks', { macbook: macbookList })
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error, please try again....' });
        });
});


Macbook.create({
    name: 'Macbook  ',
    model: 'Standard',
    color: 'Rose',
    price: 1300,
    size: 15,      //inches
    productInfo: 'Macbook  64ram, color rose'
})
    .then(function (macbookCreate) {
        console.log('NEW MACBOOK', macbookCreate.toJSON());
    })
    .catch(function (err) {
        console.log(err);
    });



//Update
Macbook.update({
    name: 'Macbook Air',
    model: 'Air',
    color: 'Silver'

}, {
    where: { id: 3 }
})
    .then(function (numberOfRows) {
        console.log('Numbers of rows updated');
        console.log(numberOfRows)   //datatype array
    })
    .catch(function (err) {
        console.log(err)
    })


//Read

Macbook.findOne({
    where: { color: 'Silver' }
})
    .then(function (foundMacbook) {
        console.log('finding a mac', foundMacbook);
    })
    .catch(function (error) {
        console.log(error);
    });

//Find or Create

Macbook.findOrCreate({
    where: {
        size: 13,

    },
    defaults: { color: 'Black' }
})
    .then(function (Macbook) {
        console.log(Macbook);
    })
    .catch(function (error) {
        console.log(error);
    })


app.listen(PORT, () => {
    console.log('Server is running on PORT', PORT);
});
