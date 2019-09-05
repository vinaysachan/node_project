
const ProductModel = require('../models/productModel');

var controller = {

  getProductsPage: (req, res, next) => {
    ProductModel.find()
      .then(products => {
        console.log(products);
        res.render('front/home.ejs', { product_list: products });
      })
      .catch(error => {
        console.log(error);
      });
  },

  getProductPage: (request, response, next) => {
    var id = request.params.id;
    ProductModel.findById(id)
      .then(product => {
        console.log(product);
        response.render('front/product_page.ejs', { product: product });
      })
      .catch(error => {
        console.log(error);
      });
  },

  updateProductPage: (request, response, next) => {
    var id = request.params.id;
    ProductModel.findById(id)
    .then(product => {
      response.render('front/add_product_page.ejs', {product : product});
    })
    .catch(error => {
      console.log(error);
    });

  },

  addProductView : (req, res, next) => {
    res.render('front/add_product_page.ejs');
  },

  addProductSave : (req, res, next) => {
    var data = req.body;
    //save in db :-
    ProductModel.create({name : data.name , price : data.price, imui : data.imui })
      .then((r) => {
        console.log(r);
        //redirect to listing page
        res.redirect('/products');
      })
      .catch(err => {
        //error mesage
        console.log(err);
      });
  },

  updateProduct : (req, res, next) => {
    //id => req, name=> 100, imui => unique
    ProductModel.where({ _id: req.body.id }).update({ name : req.body.name , price : req.body.price, imui : req.body.imui })
      .then((r) => {
        console.log(r);
        //redirect to listing page
        res.redirect('/products');
      })
      .catch(err => {
        //error mesage
        console.log(err);
      });
  }

}


module.exports = controller;


