const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema =  new Schema ({
    firstName: {
        type: String,
        require: true,
        validate: [validators.notEmpty, 'Name is empty']
    },
    lastName:{
        type: String,
        require: true,
        validate: [validators.notEmpty, 'Last Name is empty']
    },
    email:{
        type: String,
        required: true,
        validate: [
        { validator: validators.notEmpty, msg: 'Email is empty' },
        { validator: validators.isEmail, msg: 'Invalid email' }
        ]
    },
    occupation:{
        type: String,
        require: true,
        validate: [validators.notEmpty, 'Occupation is empty']
    },
    city:{
        type: String,
        require: true,
        validate: [validators.notEmpty, 'City is empty']
    },
    bio:{
        type: String,
        require: true,
        validate: [validators.notEmpty, 'Few words about yourself']
    },
    userName: {
        type: String,
        require: true,
        index: { unique: true },
        validate: [validators.notEmpty, 'UserName is empty']
    },
    password: {
        type: String,
        require: true,
        index: { unique: true },
        validate: [validators.notEmpty, 'Password is empty']
    }
   
})

const User = mongoose.model("User", userSchema);

module.exports = User;



