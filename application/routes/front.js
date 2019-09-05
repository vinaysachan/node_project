const express = require('express');

const Router = express.Router();


const mysql = require('mysql2');

const mongoose  = require('mongoose');



//URL ==> http://www.abc.com:4411
//        protocall://user:password@service_url:port/database?authSource=admin&poolsize=10

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

const prodController = require('../controllers/productController');


Router.get('/add-product',prodController.addProductView);
Router.post('/add-product',prodController.addProductSave);


Router.get('/products', prodController.getProductsPage);
Router.get('/product/:id', prodController.getProductPage);
Router.get('/product-update/:id', prodController.updateProductPage);
Router.post('/update-product',prodController.updateProduct);

 
module.exports =  Router;

