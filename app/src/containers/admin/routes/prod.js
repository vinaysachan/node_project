const router                            =   require('express').Router();


router.get('/prod' , (req, res, next) => {
    res.send('prod Page');
});

module.exports = router ;