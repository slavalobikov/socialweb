import {connect} from "react-redux";
import React from 'react'

import Main from "./Main";
import {ADD_NEW_POST_TEXT,} from "../../../Redux/ActionTypes";
import {
    getProfileThunk,
    setPhotoUser,

   updateStatusThunk
} from "../../../Redux/Reducers/ProfileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class MainContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
            if (!userID) {
                userID = this.props.id
            }
        this.props.getProfileThunk(userID)

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
    status:state.ProfilePageReducer.status,
    id:state.AuthPageReducer.id
});

let mapDispatchToProps = (dispatch) => {
    return {
        addPost:(newPostBody) => {
            dispatch(ADD_NEW_POST_TEXT(newPostBody))
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