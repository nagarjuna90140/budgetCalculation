const express=require("express")
const {createBudget,getAllBudgetDetails,updateBudgetDetails,deleteBudgetItem}=require("../Controller/budgetController")
const router=express.Router()

//creating the budget list
router.post("/create",createBudget)

//get all budget items
router.get("/getAll",getAllBudgetDetails)

//update budget details
router.put("/update/:_id",updateBudgetDetails)

//delete budget item

router.delete("/delete/:_id",deleteBudgetItem)

module.exports=router