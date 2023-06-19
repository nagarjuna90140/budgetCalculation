const mongoose=require("mongoose")
const budgetSchema=mongoose.Schema({
    // itemId:{
    //     type:Number,
    //     unique:true
    // },
    expenseItem:{
        type:String
    },
    amount:{
        type:Number
    },
    date:{
        type:"String",
    }
   
   
},{timestamps:true})
module.exports=mongoose.model("budgetController",budgetSchema)