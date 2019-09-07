

var authController = {

    loginGet : (req, res, next) => {
        res.render('admin/login.ejs');
    }
}

module.exports = authController;