const express = require('express');
const app = express();
const morgan = require('morgan');
const routesIndex = require('./routes/index');
const routerMovies = require('./routes/movies');
const port = process.env.PORT || 3000;

app.set('port', port);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', routesIndex);
app.use('/movies', routerMovies);

app.listen(port, () => {
    console.log(`Running app in http://localhost:${port}`);
});