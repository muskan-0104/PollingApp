const mongoose=require('mongoose');
// Define the Question and Option schemas
const questionSchema = new mongoose.Schema({
    text:{
        type:String,
        required: true
    },
    options: [{
        text: {
            type:String,
        },
        votes:{
            type:Number,
        },
        link_to_vote:{
            type:String,
        }
    },
    { _id: true }
],
});


const Question = mongoose.model('Question', questionSchema);
module.exports=Question;