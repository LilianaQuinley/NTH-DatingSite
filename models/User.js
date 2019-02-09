const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema =  new Schema ({
    firstName: {
        type: String,
        require:[ true,  'First Name is empty']
    },

    lastName:{
        type: String,
        require:[ true, ' Last Name is empty']
     
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },
 
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
          function(input) {
            return input.length >= 6;
          },
          "Password should be longer."
        ]
      }
   
})

const User = mongoose.model("User", userSchema);

module.exports = User;



