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
            console.log(error);
          });
      },

      login: function (body, sucess, failure) {
        return axios.post('/api/login', body)
        .then(function (response) {
            if (response.data.result == "goodlogin") {
                 sucess("profile", response.data.profile);        
            }
            else if (response.data.result == "noprofile"){
                sucess ("registering")
            }
            else {
                failure ();
            }
          })
          .catch(function (error) {
              console.log("Log my error.")
            console.log(error);
          });
      },


      search: function (body, sucess, failure) {
        return axios.post('/api/search', body)
        .then(function (response) {
            console.log("Back from search");
            console.log(response);
            sucess();
          })
          .catch(function (error) {
              console.log("Log my error.")
            console.log(error);
            failure();
          });
      }
};

export default API;

