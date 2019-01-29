import axios from "axios";

const API = {
    getUsers: function (){   
        return axios.get('/api/users');
    },

    createUser: function (body) {
        console.log("Call the post")
        return axios.post('/api/createUser' , body)
        .then(function (response) {
            console.log("Log my response");
            console.log(response);
          })
          .catch(function (error) {
              console.log("Log my error.")
            console.log(error.response.data);
          });
      }
};

export default API;

