import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authmeThunk, HelloAC, logout, logoutAC, setUserData} from "../../Redux/Reducers/AuthReducer";
import {setPhotoUser} from "../../Redux/Reducers/ProfileReducer";


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
        photo:state.AuthPageReducer.photo,
        isAuth:state.AuthPageReducer.isAuth,
        hello:state.AuthPageReducer.hello,
    }
};

export default connect(mapStateToProps, {
    setUserData,
    setPhotoUser,
    HelloAC,
    logoutAC,
    //authmeThunk,
    logout,

})(HeaderContainer);