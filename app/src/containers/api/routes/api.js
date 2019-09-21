const router                            =   require('express').Router();
const userController                    =   require('./../controllers/userController');





router.get('/api/user' , userController.getUserList);
router.get('/api/user/:user_id' , userController.getUserDetail);




module.exports = router;