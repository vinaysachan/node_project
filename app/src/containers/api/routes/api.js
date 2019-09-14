const router                            =   require('express').Router();


router.get('/api' , (req, res, next) => {
    res.send('APi Page');
});

module.exports = router ;