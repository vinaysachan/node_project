const express = require('express');

const Router = express.Router();

const adminController = require('../controllers/adminController');
const authController = require('../controllers/authController');


Router.get('/login', authController.loginGet);
Router.post('/login', authController.loginPost);
Router.get('/logout',authController.logout);

Router.get('/', adminController.dashboard);




module.exports =  Router;

