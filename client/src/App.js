import React, { Component } from "react";
import "./App.css";
import API from "./library/API";
import Userlist from "./components/UserList";
import UserForm from "./components/UserForm";


class App extends Component {
  // state = {
  //   users: []
  // }

  // componentDidMount (){
  
  //   API.getUsers().then(res => { 
  //     console.log(res.data)
  //     this.setState({users:res.data});
  //   });
   
  // }

  render() {

    return (
      
      <div className="App">

      <UserForm />

        {/* <Userlist users = {this.state.users} /> */}

      </div>
    );
  }
}

export default App;
