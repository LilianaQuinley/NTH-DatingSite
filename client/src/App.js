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
  constructor (props) {
    super (props);
    this.state = {userState : "nonuser"}
  }

  toggleFun = (stateS) => {
    this.setState({userState : stateS})
  }

  render() {

    // if(this.state.userState == "registering") {
    //   return (
    //     <div className = "App">
    //       <UserForm />
    //       <Footer />
    //     </div>
    //   )}
    //   else if (this.state.userState == "nonuser"){
    //     return (
    //     <div className = "App">
    //       <MenuAppBar />
    //       <MainPage toggleFun ={this.toggleFun} />
    //     </div>
    //   )
    // }


return (
      
  <div className="App">

        {/* <OpenLeftMenu/> */}

{/* //         <MenuAppBar /> */}

         {/* <InputFormMain /> */}
         <UserForm /> 

{/* //         <MainPage/> */}

         {/* <Footer/> */}

      </div>
 );


}    
}

export default App;
