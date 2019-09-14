const router                            =   require('express').Router();


router.get('/admin' , (req, res, next) => {
    res.send('Admin Page');
});

module.exports = router ;