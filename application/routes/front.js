const express = require('express');

const Router = express.Router();


const mysql = require('mysql2');

const mongoose  = require('mongoose');




var url             = 'mongodb://localhost:27017/nodeprojectdb' ;
var url_with_user   = 'mongodb://root:root@localhost:27017/nodeprojectdb?authSource=admin&poolSize=10' ;

mongoose.connect(url_with_user, {useNewUrlParser: true})
.catch(error => {
  console.log(error);
});

 
// create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'node_project_db',
//   password : 'root'
// });

Router.get('/', (req, res, next) => {
    res.send('Home page');
});

const dummyController = require('../controllers/productController');

Router.get('/products', dummyController.getProductsPage);
Router.get('/product/:id', dummyController.getProductPage);

 
module.exports =  Router;

