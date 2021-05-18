const express=require('express');
const router=express.Router();

const menu=require('./menu');
const user=require('./user');



router.use('/menu',menu);
router.use('/user',user);

module.exports=router