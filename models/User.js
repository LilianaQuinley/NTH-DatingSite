const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema =  new Schema ({
    firstName: {
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true,
    },
    userName: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    eMail: { 
        type: String,
        require: true
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;



