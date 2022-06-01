const express=require("express")

const mongoose=require("mongoose")





const classcontroller=require("./controllers/classcontroller")

// const tagcontroller=require("./controllers/tag.controller")
// const postcontroller=require("./controllers/post.controller")
// const commentcontroller=require("./controllers/comment.controller")

const app=express()



app.use("/class",classcontroller)

// app.use("/tags",tagcontroller)

//  app.use("/posts",postcontroller)
//  app.use("/comments",commentcontroller)
 

module.exports=app