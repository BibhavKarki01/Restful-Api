const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympics",{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=> {
    console.log("Connection Successful")
}).catch((e) => {
console.log("No Connection")
})