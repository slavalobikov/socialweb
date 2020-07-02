import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main/Main";
import Footer from "./Component/Footer/Footer";
import Dialogs from "./Component/Main/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

import MainContainer from "./Component/Main/Main/MainContainer";
import UsersContainer from "./Component/Main/Users/UsersContainer";
import HeaderContainer from "./Component/Header/HeaderContaine";
import Login from "./Component/Main/Login/Login";


function App(props) {

    return (
            <div className={"App"}>
                <HeaderContainer />
                <Route path='/profile/:userID?' render = { () => <MainContainer  />} />
                <Route path="/dialogs" component={Dialogs} />
                <Route path="/users" component={UsersContainer} />
                <Route path="/login" component={Login} />

                <Footer/>


            </div>
    );
}

export default App;
