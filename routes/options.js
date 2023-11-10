const express=require('express');
//for router
const router=express.Router();

//use routes
const optionsController=require('../controller/options_controller');

router.delete('/:id/delete',optionsController.deleteOp);
router.post('/:id/add_vote',optionsController.addVote);
console.log("options routes loaded");

module.exports=router;
