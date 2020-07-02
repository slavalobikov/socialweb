import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authmeThunk, setUserData} from "../../Redux/Reducers/AuthReducer";
import {setPhotoUser} from "../../Redux/Reducers/ProfileReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authmeThunk();
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login:state.AuthPageReducer.login,
        photo:state.AuthPageReducer.photo,
        isAuth:state.AuthPageReducer.isAuth,
    }
};

export default connect(mapStateToProps, {
    setUserData,
    setPhotoUser,
    authmeThunk,


})(HeaderContainer);