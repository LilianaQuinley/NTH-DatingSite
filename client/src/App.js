import React, { Component } from "react";
import "./App.css";
import API from "./library/API";
import Userlist from "./components/UserList";
import UserForm from "./components/UserForm";
import OpenLeftMenu from "./library/OpenLeftMenu";
import MenuAppBar from "./library/MenuAppBar";
import Footer  from "./library/Footer";
import MainPage from "./components/MainPage";
// import indexForm from "./InputForms/indexForm";
import InputFormMain from './InputFormMain';


class App extends Component {

  render() {
    
    return (
      
      <div className="App">

        {/* <OpenLeftMenu/> */}

        <MenuAppBar />

        {/* <InputFormMain /> */}


        {/* <UserForm /> */}

        <MainPage/>

        {/* <Footer/> */}

      </div>
    );
  }
}

export default App;
