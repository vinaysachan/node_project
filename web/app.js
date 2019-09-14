const express       =   require('express');
const mainModuleDir =   require('./application/util/main_module_dir');
const path          =   require('path');
const bodyParser    =   require('body-parser');
const cookieParser  =   require('cookie-parser');
const mongoose      =   require('mongoose');
const session       =   require('express-session');
const flash         =   require('express-flash-messages');
const MongoStore    =   require('connect-mongo')(session); //session save in db (mongo)
const frontRoutes   =   require('./application/routes/front');
const adminRoutes   =   require('./application/routes/admin');
const app           =   express(); 

// var server = require('http').createServer(app);
// var io = require('socket.io')(server);

// io.on('connection', function(client) {
//     console.log('vinay sachann Client connected...');

// //     client.on('join', function(data) {
// //         console.log(data);
// });

var io = require('socket.io')(app);

io.on('connection', function (socket) {
    console.log('vinay sachann Client connected...');
//   socket.on('message', function () { });
//   socket.on('disconnect', function () { });
});
  





app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
const connection = mongoose.createConnection('mongodb://root:root@localhost:27017/nodeprojectdb?authSource=admin&poolSize=10');
app.use(session({
    secret: 'our secret key',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({mongooseConnection: connection})  // temp file
    // cookie: { secure: true }
}));
app.use(flash());
// app.set('views', 'views_folder_path');
app.set('views', ['./application/views']);

//public folder add :-
var public_path = path.join(mainModuleDir,'public'); //=> /var/vinay/www/study/node_project/public
app.use(express.static(public_path)); // Browser 
//Storage folder add for Browser
var storage_path = path.join(mainModuleDir,'storage');
app.use(express.static(storage_path));

app.use('/admin',adminRoutes);
app.use(frontRoutes);

app.listen(2000);

