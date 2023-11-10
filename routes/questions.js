const express=require('express');
//for router
const router=express.Router();

//use routes
const questionsController=require('../controller/question_controller');
router.post('/create',questionsController.create);
router.post('/:id/options/create',questionsController.options);
router.delete('/:id/delete',questionsController.deleteQue);
router.get('/:id',questionsController.questions)
router.get('/',questionsController.allQuestions)
console.log("questions routes loaded");

module.exports=router;
