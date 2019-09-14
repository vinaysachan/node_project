const express           =   require('express');
const router            =   express.Router();
const fs                =   require('fs');

//Get all containers
var app_container_path              =   './src/containers';
//Get all containers routes folder:-
if (fs.existsSync(app_container_path)) {
    var all_containers_paths        =   fs.readdirSync(app_container_path);
    all_containers_paths.map(container_path => {
        var container_route_path    =   app_container_path + '/' + container_path + '/routes';
        //Get all containers routes folder' route file:-
        if(fs.existsSync(container_route_path)) {
            fs.readdirSync(container_route_path).map(file => {
                router.use('', require('../containers/' + container_path + '/routes/' + file));
            });
        }
    });
}
module.exports = router ;