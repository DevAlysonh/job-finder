const express  = require('express');
const app      = express();
const database = require('./database/connection');
const request  = require('body-parser');
const path     = require('path');
const exphbs  = require('express-handlebars');

//PORT CONNECTION
const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Rodando na porta ${PORT}`);
});

//Use body_parser
app.use(request.urlencoded({ extended: false }));

// Handle Bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// static folder
app.use(express.static(path.join(__dirname, 'public')));

//DB conction
database.authenticate()
        .then(() => {
            console.log(`Database conectada!`);
        })
        .catch(err => {
            console.log(`Ocorreu um erro com a conexão`);
        });

//routes
app.get('/', (req, res) => {
    res.render("index");
});

//Using Routes:
app.use('/jobs', require('./Routes/web'));