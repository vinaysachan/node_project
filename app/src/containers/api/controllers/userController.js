const userAction            =   require('./../actions/userListAction');
module.exports = {

    getUserList     :   (req, res, next) => {
        userAction().then(users => {
            res.status(200).json(users);
        }).catch(error => {
            next(error);
        });
    },

    getUserDetail   :   (req, res, next) => {
        res.send('Single User Api Page');

        //200
    },

};