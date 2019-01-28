import axios from "axios";

const API = {
    getUsers: function (){
        
        return axios.get('/api/users');
        

    }
};

export default API;

