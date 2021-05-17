const express = require('express');
const router=express.Router();
const menuPizza=require('../controllers/menu/pizza');
const menuPasta=require('../controllers/menu/pasta');
const menuDrinks=require('../controllers/menu/drinks');
const menuSalad=require('../controllers/menu/salad');
const menuDessert=require('../controllers/menu/dessert');


router.get('/pizzaList',menuPizza.list);
router.get('/pastaList',menuPasta.list);
router.get('/drinkList',menuDrinks.list);
router.get('/saladList',menuSalad.list);
router.get('/dessertList',menuDessert.list);

module.exports=router;