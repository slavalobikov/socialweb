import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getProfileThunk} from "../Redux/Reducers/ProfileReducer";
import AuthPageReducer from "../Redux/Reducers/AuthReducer";

let mapStateToProps = (state) => {
    return {
        isAuth:state.AuthPageReducer.isAuth,
    }
};

export const withProfileInfo = (Component) => {



    class withProfileInfo extends React.Component {

        componentDidMount() {
            this.props.getProfileThunk(this.props.id)
        }

        render() {
            return <Component {...this.props} />
        }
    }

    let mapStateToProps = (state) => ( {
        login:state.AuthPageReducer.login,
        id:state.AuthPageReducer.id,
        /*newPostText:state.ProfilePageReducer.newPostText,
        photo: state.ProfilePageReducer.photo,
        isFetching: state.UsersPageReducer.isFetching,
        status:state.ProfilePageReducer.status,
        id:state.AuthPageReducer.id,
        profile: state.ProfilePageReducer.profile,*/
    });


    let ConnectProfileInfoComponent = connect(mapStateToProps, {getProfileThunk})(withProfileInfo);
    return ConnectProfileInfoComponent;
};


