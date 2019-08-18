
const ProductModel = require('../models/productModel');

var controller = {

    getProductsPage : (req, res, next) => {
        // var new_product  = {name: "mi redmi 4 1 2", price : 1000 }; 
        // ProductModel.create(new_product)
        //   .then( s => {
        //     console.log(s);
        //   }).catch(error => {
        //     console.log(error);
        //   });
      
          ProductModel.find()
            .then(products => {
              console.log(products);
              res.render('front/home.ejs', {product_list : products});
            })
            .catch(error => {
              console.log(error);
            });
      
      
        // res.send('mongo 123213 123 123');
      },

    getProductPage : (request, response, next) => {
        var id = request.params.id;
        
        ProductModel.findById(id)
            .then(product => {
              console.log(product);
              response.render('front/product_page.ejs', {product : product});
            })
            .catch(error => {
              console.log(error);
            });

 
    }

}


module.exports = controller;


