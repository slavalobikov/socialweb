import React from 'react';
import './App.css';
import Footer from "./Component/Footer/Footer";
import Dialogs from "./Component/Main/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

import MainContainer from "./Component/Main/Main/MainContainer";
import UsersContainer from "./Component/Main/Users/UsersContainer";
import HeaderContainer from "./Component/Header/HeaderContaine";
import Login from "./Component/Main/Login/Login";
import {connect} from "react-redux";
import {authmeThunk} from "./Redux/Reducers/AuthReducer";
import {initializeApp} from "./Redux/Reducers/AppReducer";
import Preloader from "./common/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return  <Preloader/>
        }

        return (
            <div className={"App"}>
                <HeaderContainer/>
                <Route path='/profile/:userID?' render={() => <MainContainer/>}/>
                <Route path="/dialogs" component={Dialogs}/>
                <Route path="/users" component={UsersContainer}/>
                <Route path="/login" component={Login}/>

                <Footer/>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized:state.AppReducer.initialized,
    }
};

export default connect(mapStateToProps, {initializeApp})(App);
