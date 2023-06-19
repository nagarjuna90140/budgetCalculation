const express=require("express")
const mongoose=require("mongoose")
const router=require("./Routes/budgetRoutes")
const app=express()
app.use(express.json())
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/",
  {
    dbName: "BudgetCalculator",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

);
app.use("/budgetCalculator",router)
//const DB="mongodb+srv://nagarjunatelukuntla:Arjun3@123@cluster0.biawdlr.mongodb.net/budgetCalculator"
// mongoose.connect(DB)
// .then(()=>{
//     console.log("connection successfull")
// }).catch((error)=>{
//     console.log(error)
// })
app.listen(3000,(err)=>{
if(err){
    console.log(err)
}else{
    console.log("server started running")
}
})