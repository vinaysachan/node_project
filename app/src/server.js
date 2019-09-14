const routesManager             =   require('./middleware/routeManager');

const router                            =   require('express').Router();

//app is our express instance
//config is our configuration file data
module.exports = (app, config, a) => {


    //Middleware Include :- 
    app.use(routesManager);


    app.listen(process.env.APP_PORT, err => {
        if (err) {
            console.log(err);
        }
        console.log('Server running');
    });
}