const express = require('express');
const router=express.Router();
const menuPizza=require('../controllers/menu/pizza');
const menuPasta=require('../controllers/menu/pasta');
const menuDrinks=require('../controllers/menu/drinks');
const menuSalad=require('../controllers/menu/salad');
const menuDessert=require('../controllers/menu/dessert');
const auth=require("../middlewares/auth")


router.get('/pizzaList', auth,menuPizza.list);
router.get('/pastaList', auth,menuPasta.list);
router.get('/drinkList', auth,menuDrinks.list);
router.get('/saladList', auth,menuSalad.list);
router.get('/dessertList', auth,menuDessert.list);

module.exports=router;