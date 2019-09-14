const bcrypt            =   require('bcrypt');
const userModel      =   require('../models/userModel');
var authController = {

    //Login Page:-
    loginGet: (req, res, next) => {

            // console.log(bcrypt.hashSync('Pass@123', 10));
            //==>   $2b$10$9KNCZRpLdAjchGrCary5Leb7g0fROjJop61pXIhBBLDYmSJMspuim
            //      $2b$04$vJHul1ChN6h8QE/6thXmAO5DsDIwPSIrXAcBjLKmg0Az17D3TWn2i

        res.render('admin/login.ejs');
    },

    loginPost: (req, res, next) => {
        var username    =   req.body.username;
        var password    =   req.body.password;
        
        userModel.findOne({username : username}).then(user => {
            if(user) {
                console.log('user found');
                bcrypt.compare(password, user.password, function(err, comres) {
                    if(comres == true) {
                        req.flash('notify', 'Login Done');
                        //Set Session :-
                        //session ==> name + isLoginTrue
                        req.session.login = {
                            isLogin     :   true,
                            user_name   :   user.name
                        };
                        res.redirect('/admin');
                    } else {
                        req.flash('notify', 'password is incorrect.');
                        res.redirect('/admin/login');
                    }
                });
            } else {
                req.flash('notify', 'user not found.');
                res.redirect('/admin/login');
            }
        }).catch(error => {
            console.log(error);
        }); 
        // var hash = bcrypt.hashSync('Pass@123', 10);
         

 
        // singup ==> Pass@123 ==> 
    },
    logout : (req, res, next) => {
        if(req.session.login && req.session.login.isLogin) {
            req.session.login = {};
        }
        req.flash('notify', 'Logout Successfully.');
        res.redirect('/admin/login');
        //Logoin Session ==> desctroy
        // req.session.destroy(function(err) {
            // cannot access session here
        // });
    }

}

module.exports = authController;