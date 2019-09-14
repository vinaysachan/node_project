const path =require('path');

const main_module = process.mainModule.filename;  //  => /var/vinay/www/study/node_project/app.js

const main_modile_path  =   path.dirname(main_module); // => /var/vinay/www/study/node_project

module.exports = main_modile_path;