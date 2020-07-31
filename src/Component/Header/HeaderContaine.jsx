import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authmeThunk, HelloAC, logout, logoutAC, setUserData} from "../../Redux/Reducers/AuthReducer";
import {setPhotoUser} from "../../Redux/Reducers/ProfileReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


class HeaderContainer extends React.Component {

/*
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isAuth != prevProps.isAuth ) {
            alert('hello');
        }
    }
*/

    render() {
        return (
            <Header {...this.props}  />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login:state.AuthPageReducer.login,
        profilePage:state.ProfilePageReducer.profile,
        isAuth:state.AuthPageReducer.isAuth,
    }
};

export default compose(
connect(mapStateToProps, {
    setUserData,
    setPhotoUser,
    logoutAC,
    //authmeThunk,
    logout,}),
    withRouter,
    )(HeaderContainer);