const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://ziad:VIPziad-atlas@cluster0.al2dl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => { console.log("connected")})
.catch(()=>{console.log("error in connection")})


module.exports = mongoose