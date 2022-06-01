const app=require("./index")
const connect=require("./configs/db")


app.listen(2345,async(req,res)=>{
    try{
     await connect()
     console.log("Listning on port 2345")
    }catch(err){
        console.log(err)
    }
 })