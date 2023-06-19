const budgetSchema = require("../Model/budgetModel")


//creating the budget items
const createBudget = async (req, res) => {
    const data = new budgetSchema({
        // itemId:req.body.itemId,
        expenseItem: req.body.expenseItem,
        amount: req.body.amount,
        date: req.body.date
    })
    try {
        const result = await data.save()
        res.status(201).send({
            success: true,
            message: "success",
            result
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "request failed",
            error
        })
    }
}


//get all budget items
const getAllBudgetDetails = async (req, res) => {
    const val = await budgetSchema.find({})
    try {
        if (val) {
            res.send(val)
        } else {
            res.send("data not exist")
        }
    } catch (error) {
        res.send(error)
    }

}


//updating the item
const updateBudgetDetails = async (req, res) => {
    let upId = req.params._id
    let upExpenseItem = req.params.expenseItem
    let upAmount = req.body.amount
    let upDate = req.body.date
    const data = await budgetSchema.findOneAndUpdate({ _id: upId }, {
        $set: { expenseItem:upExpenseItem,amount: upAmount, date: upDate }
    }, { next: false })
    if (data == null) {
        res.send("data not exist")
    } else {
        res.send(data)
    }
}


//delting the budget item
const deleteBudgetItem=async(req,res)=>{
   
    const val = await budgetSchema.findOneAndDelete({ _id: req.params._id })
    try {
        if (val) {
            res.status(200).send({
                success:true,
                message:"deleted one document",
            })
        } else {
            res.status(500).send({
                success:false,
                message:"No data exist"
            })
        }
    } catch (error) {
        res.send(error)
    }
}
module.exports = { createBudget, getAllBudgetDetails, updateBudgetDetails,deleteBudgetItem}