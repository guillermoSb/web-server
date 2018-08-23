const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
require('./hbs/helpers/helpers');
const app = express();

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//helpers

let mainObject = {
    nombre: 'guillermo',

}
app.get('/', (req, res) => {
    res.render('home', mainObject);

})
app.get('/about', (req, res) => {
    res.render('about', mainObject);
})
app.listen(port, () => {
    console.log("Escuchando en el puerto");
});