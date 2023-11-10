const Question =require('../models/questions');
//create qustion
module.exports.create=async function(req,res){
    try {
        const newQuestion = await Question.create({ text: req.body.text, options: [] });
        res.json(newQuestion);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
  }
//create option for a question 
  module.exports.options=async (req, res) => {
    const questionId = req.params.id;
    try {
        const question = await Question.findById(questionId);

        if (!question) {
            res.status(404).json({ error: 'Question not found' });
        } else {
            const newOption = { 
                text: req.body.text, 
                votes: 0,
            };
            data=await question.options.push(newOption);
            await question.save();
            //get id of newly added option
            id = question.options[data-1]._id
            //create voting link
            link_to_vote= "http://localhost:8000/options/"+id+"/add_vote"

            //update voting link for that option
            await Question.findOneAndUpdate(
                { 'options._id': id },
                { 'options.$.link_to_vote': link_to_vote },
                { new: true }
            );
    
            res.json(newOption);
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
//delete question
module.exports.deleteQue=async (req, res) => {
    const questionId = req.params.id;

    try {
        await Question.findByIdAndDelete(questionId);
        res.json({ message: 'Question deleted successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//find a quesion by id
module.exports.questions=async (req, res) => {
    const questionId = req.params.id;

    try {
        const question = await Question.findById(questionId);

        if (question) {
            res.json(question);
        } else {
            res.status(404).json({ error: 'Question not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//find all questions ever created
module.exports.allQuestions=async (req, res) => {

    try {
        const question = await Question.find({});

        if (question) {
            res.json(question);
        } else {
            res.status(404).json({ error: 'No Qustions found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}