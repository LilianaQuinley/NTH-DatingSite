import React, { Component } from "react";
import "./App.css";
import API from "./library/API";
import Userlist from "./components/UserList";
import UserForm from "./components/UserForm";
import OpenLeftMenu from "./library/OpenLeftMenu";
import MenuAppBar from "./library/MenuAppBar";
import Footer  from "./library/Footer";
import MainPage from "./components/MainPage";
import InputFormMain from './InputFormMain';
import ProfilePage from "./components/ProfilePage";

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {userState : "nonuser"}
  }

  toggleFun = (stateS, email) => {
    this.setState({userState : stateS, email: email})   
  }

  render() {

    if(this.state.userState == "registering") {
      return (
        <div className = "App">
          <UserForm email={this.state.email}/>
          <Footer />
        </div>
      )}
      else if (this.state.userState == "nonuser"){
        return (
        <div className = "App">
          <MenuAppBar />
          <MainPage toggleFun ={this.toggleFun} />
        </div>
      )}
      else if (this.state.userState == "profile"){
        return (
        <div className = "App">
          <ProfilePage />
        </div>
      )}

      
  }
}
  
export default App;



