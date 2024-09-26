const mongoose = require('mongoose')

const employee = mongoose.model('employee',
    {
        
        username : {type:String},
        email : {type:String},
        password : {type:String},
        country : {type:String},
        gender : {type:String},
        photo:{type:String}
    }
)

module.exports=employee;