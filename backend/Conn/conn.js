const mangoose = require("mongoose");

const conn = async (req,res)=> {
   
    await mangoose.connect("mongodb+srv://harishvenkii2002:Dollar$100@cluster0.1ldxspb.mongodb.net/")
    .then(()=>{
        console.log("connected");
    })
  

};
conn();