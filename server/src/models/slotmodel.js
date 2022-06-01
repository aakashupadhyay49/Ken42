const mongoose=require("mongoose")

const slotsSchema=new mongoose.Schema({
    Start:{type:String,required:true},
    End:{type:String,required:true}

},{
    versionKey:false,
    timestamps: true 
}

)

module.exports=mongoose.model("slots",slotsSchema)