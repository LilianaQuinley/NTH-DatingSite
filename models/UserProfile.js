const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userProfileSchema =  new Schema ({
    birthday: {
        type: Date,
        require:[ true,  'Birthday is empty']
    },

    gender:{
        type: String,
        require:[ true, ' Gender is empty']
     
    },
    email: {
        type: String,
        unique: true,
        require:[ true, ' Email address is empty']
      },
 
    lookingFor: {
        type: String,
        required: "Looking for is Required"
      },

    ethnic:{
        type: String,
        require:[ true, ' Ethnic is empty']
    },
    relationshipStatus:{
        type: String,
        require:[ true, ' Relationship status is empty']
    },
    relationshipLooking:{
        type: String,
        require:[ true, ' Releationship looking for is empty']
    },
    haveChildren:{
        type: String,
        require:[ true, ' Have children is empty']
    },
    educationLevel:{
        type: String,
        require:[ true, ' Education level is empty']
    },
    employmentStatus:{
        type: String,
        require:[ true, ' Employment status is empty']
    },
    incomeRange:{
        type: String,
        require:[ true, ' Income range is empty']
    },
   
})

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

module.exports = UserProfile;