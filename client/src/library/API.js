import axios from "axios";

const API = {
    getUsers: function (){   
        return axios.get('/api/users');
    },

    createUser: function (body, sucess) {
        console.log("Call the post")
        return axios.post('/api/createUser', body)
        .then(function (response) {
            console.log("Log my response");
            console.log(response);
            sucess();
          })
          .catch(function (error) {
              console.log("Log my error.")
            console.log(error.response.data);
          });
      },

      createUserProfile: function (body, sucess) {
        console.log("Call the post")
        return axios.post('/api/createUserProfile', body)
        .then(function (response) {
            console.log("Log my response");
            console.log(response);
            sucess();
          })
          .catch(function (error) {
              console.log("Log my error.")
            console.log(error.response.data);
          });
      }
};

export default API;

