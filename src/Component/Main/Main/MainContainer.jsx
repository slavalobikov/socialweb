import {connect} from "react-redux";
import React from 'react'

import Main from "./Main";
import {ADD_NEW_POST_TEXT, UPDATE_NEW_POST_TEXT} from "../../../Redux/ActionTypes";
import {getProfile, profileAPI} from "../../../api/api";
import {
    getProfileThunk,
    getStatusThunk,
    setPhotoUser,
    setStatusUser,
    updateStatus, updateStatusThunk
} from "../../../Redux/Reducers/ProfileReducer";
import {withRouter} from "react-router-dom";
import {isFetchingFalse, isFetchingTrue} from "../../../Redux/Reducers/UsersReducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


class MainContainer extends React.Component {
    componentDidMount() {

        this.props.getProfileThunk(this.props.match.params.userID)

    }

    render() {
        return <Main {...this.props} />
    }
}



let mapStateToProps = (state) => ( {
    profilePage:state.ProfilePageReducer.profilePage,
    newPostText:state.ProfilePageReducer.newPostText,
    photo: state.ProfilePageReducer.photo,
    isFetching: state.UsersPageReducer.isFetching,
    status:state.ProfilePageReducer.status
});

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText:(text) => {
            dispatch(UPDATE_NEW_POST_TEXT(text))
        },
        addPost:() => {
            dispatch(ADD_NEW_POST_TEXT())
        },
        setPhotoUser:(photo) => {
            dispatch(setPhotoUser(photo))
        },
        getProfileThunk: (id) => {
            dispatch(getProfileThunk(id))
        },
        updateStatusThunk: (status) => {
            dispatch(updateStatusThunk(status))
        }
    }
};

/*let withAuthRedirectCC = withAuthRedirect(MainContainer)

let withURLDataContainerComponent = withRouter (withAuthRedirectCC);

export default connect(mapStateToProps, mapDispatchToProps)(withURLDataContainerComponent);*/

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    //withAuthRedirect,
)(MainContainer)