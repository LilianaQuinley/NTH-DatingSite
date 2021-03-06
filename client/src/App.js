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
import SearchPage from "./components/SearchPage";

  


class App extends Component {
  constructor (props) {
    super (props);
    this.state = {userState : "nonuser"}
  }

  toggleFun = (stateS, email, profile, firstName, lastName) => {
    console.log("profile from app");
    console.log(profile);

    if (profile) {
      this.setState ({userState : stateS, email: email, profile: profile, firstName : firstName, lastName: lastName});
    }else {
          this.setState({userState : stateS, email: email, firstName : firstName, lastName: lastName})  
    }
  }

  goSearch = () => {
      this.setState ({userState : "search"})
  }

  goProfile = () => {
      this.setState({userState : "profile"})
  }
  

  render() {

    if(this.state.userState == "registering") {
      return (
        <div className = "App">
          <UserForm  firstName={this.state.firstName} lastName = {this.state.lastName} email={this.state.email} toggleFun ={this.toggleFun}/>
          <Footer />
        </div>
      )}
      else if (this.state.userState == "nonuser"){
        return (
        <div className = "App">
          <MenuAppBar toggleFun ={this.toggleFun}/>
          <MainPage toggleFun ={this.toggleFun} />

    

        </div>
      )}
      else if (this.state.userState == "profile"){
        return (
        <div className = "App">
          <ProfilePage profile = {this.state.profile} search = {this.goSearch}/>

        </div>
      )}
      else if (this.state.userState == "search"){
        return (
        <div className = "App">
          <SearchPage goProfile = {this.goProfile} toggleFun ={this.toggleFun}/>
     

        </div>
      )}

      
  }
}
  
export default App;



