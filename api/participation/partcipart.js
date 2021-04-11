const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const QuestionSchema = new mongoose.Schema

let ImpactSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "participart"
    },

    name: {
        type: String
    },

     facture: {
        type: Number

     },
     id: {
        type: Number

    },
    culture: {
        type: String,
        enum: ['Papa', 'Cebolla', 'Vegetales', 'Arroz', 'Otros'],
        required: true

    },
    purchaseValue:{
      type: Number

    },

   numbreFacture:{
       type: Number

   },


})
 module.exports = mongoose.model('impact', ImpactSchema);



let QuestionSchema = new Schema({
    description: String,
    alternatives: [
        {
            text: { 
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    ], 



    

})

module.exports = mongoose.model('Question', QuestionSchema)
