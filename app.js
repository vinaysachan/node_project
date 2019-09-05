const express       =   require('express');
const mainModuleDir =   require('./application/util/main_module_dir');
const path          =   require('path');
const bodyParser    =   require('body-parser');
const frontRoutes   =   require('./application/routes/front');
const adminRoutes   =   require('./application/routes/admin');
const app           =   express(); 

app.use(bodyParser.urlencoded({ extended: false }))

// app.set('views', 'views_folder_path');
app.set('views', ['./application/views']);

//public folder add :-
var public_path = path.join(mainModuleDir,'public'); //=> /var/vinay/www/study/node_project/public
app.use(express.static(public_path)); // Browser 
//Storage folder add for Browser
var public_path = path.join(mainModuleDir,'storage');
app.use(express.static(public_path));

app.use('/admin',adminRoutes);
app.use(frontRoutes);

app.listen(2000);
 
