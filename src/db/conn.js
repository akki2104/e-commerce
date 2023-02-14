const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://0.0.0.0:27017/login",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})