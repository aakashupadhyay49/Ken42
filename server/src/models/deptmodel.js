const mongoose=require("mongoose")

const deptSchema=new mongoose.Schema({
    dept:{type:String,require:true},

},{
    versionKey:false,
    timestamps: true 
}

)

module.exports=mongoose.model("dept",deptSchema)