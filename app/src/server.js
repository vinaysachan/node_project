const routesManager             =   require('./middleware/routeManager');
const router                    =   require('express').Router();
//app is our express instance
//config is our configuration file data
module.exports = (app, config, a) => {


    //Middleware Include :- 
    app.use(routesManager);
    //Middleware for Api Error handling :- 
    app.use((error, req, res, next) => {
        const statusCode = error.statusCode || 500;
        const message    = error.message;
        const data       = error.data;
        res.status(statusCode).json({ message: message, data: data });
    });
    
    app.listen(process.env.APP_PORT, err => {
        if (err) {
            console.log(err);
        }
        require('./middleware/mongoConnect');
    });
}