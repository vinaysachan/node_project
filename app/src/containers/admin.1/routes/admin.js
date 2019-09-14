const router                            =   require('express').Router();


router.get('/admin1' , (req, res, next) => {
    res.send('Admin1 Page');
});

module.exports = router ;