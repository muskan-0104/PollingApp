const Question =require('../models/questions');

//delete option
module.exports.deleteOp=async (req, res) => {
    const optionId = req.params.id;

    try {
        const question = await Question.findOneAndUpdate(
            { 'options._id': optionId },
            { $pull: { options: { _id: optionId, votes: 0 } } },
            { new: true }
        );

        if (!question) {
            res.status(404).json({ error: 'Option not found' });
        } else {
            res.json({ message: 'Option deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//add vote for an option
module.exports.addVote=async (req, res) => {
    const optionId = req.params.id;

    try {
        const question = await Question.findOneAndUpdate(
            { 'options._id': optionId },
            //inccrease the value f vote by one
            { $inc: { 'options.$.votes': 1 } },
            { new: true }
        );

        if (!question) {
            res.status(404).json({ error: 'Option not found' });
        } else {
            res.json({ message: 'Vote added successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


