const express = require('express');

const Router = express.Router();


Router.get('/', (req, res, next) => {
    // res.send('Admin home page');
    res.render('admin/dashboard.ejs');
});

module.exports =  Router;

