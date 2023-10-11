//-Sumin Gharti Chhetri - 301313664 - 2023 oct 11 --
// Importing the dependencies
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const compression = require('compression');

module.exports = () => {
    const app = express();

    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    } else if(process.env.NODE_ENV === 'production'){
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.use(methodOverride());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.use('/', require('../app/routes/index.server.routes.js'));

    app.use(express.static('./node_modules'));
    app.use('/public', express.static('public'));

    return app;
};