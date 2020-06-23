import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main/Main";
import Footer from "./Component/Footer/Footer";
import Dialogs from "./Component/Main/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Users from "./Component/Main/Users/Users";
import {Provider} from "react-redux";
import store from "./Redux/ReduxStore"
import MainContainer from "./Component/Main/Main/MainContainer";
import UsersContainer from "./Component/Main/Users/UsersContainer";


function App(props) {

    return (
            <div className="App">
                <Header/>


                <Route path="/profile" render = { () => <MainContainer  />} />

                <Route path="/dialogs" component={Dialogs} />
                <Route path="/users" component={UsersContainer} />

                <Footer/>


            </div>
    );
}

export default App;
