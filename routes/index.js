var express = require('express');
var router = express.Router();
var user  =require('../controller/usercontroller');
var auth  =require('../middleware/auth');


router.get('/',user.get_data);
router.post('/',user.insert);
router.post('/login',user.login);



module.exports = router;
