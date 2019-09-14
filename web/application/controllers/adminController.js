

var adminController = {

    dashboard : (req, res, next) => {

        res.cookie('india1', 'Chandrayan 2');
        res.cookie('india2', 'mangalyan');
        res.cookie('india3', 'Chandrayan 3');

        if (req.session.views) {
            req.session.views++ ;
        } else {
            req.session.views = 1 ;
        }
        var session_val = req.session.views ;

        
          

        //login ==> success
        //req.session.user_id = 233;
        //req.session.isLogin = true;

        //Middleware :-
        //if(req.session.isLogin) {
            // next();
        // } else {
            //redirect to login page :-
        // }

        
        res.render('admin/dashboard.ejs', {sess : session_val});
    }
}

module.exports = adminController;