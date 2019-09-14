const router                            =   require('express').Router();


router.get('/user' , (req, res, next) => {
    res.send('User Page');
});

module.exports = router ;