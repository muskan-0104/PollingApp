const express=require('express');
//for router
const router=express.Router();
bodyParser = require('body-parser').json();

//use routes
router.use('/questions',bodyParser,require('./questions'));
router.use('/options',bodyParser, require('./options'));
console.log("routes loaded");

module.exports=router;
