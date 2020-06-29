import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {isAuthBool, setUserData} from "../../Redux/Reducers/AuthReducer";
import {authme, getProfile} from "../../api/api";
import {setPhotoUser} from "../../Redux/Reducers/ProfileReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {

        authme().then(response => {

                if (response.resultCode === 0) {

                    setUserData(this.props.setUserData(response.data.id, response.data.email, response.data.login))

                }
        })

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


})(HeaderContainer);