const router                            =   require('express').Router();


router.get('/prod1' , (req, res, next) => {
    res.send('prod1 Page');
});

module.exports = router ;