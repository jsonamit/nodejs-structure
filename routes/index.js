const express=require('express');
const router=express.Router();
const UserController=require('../controller/user.controller');

router.post('/register',UserController.register);
router.get('/users',UserController.getuser);

module.exports=router;