import {connect} from "react-redux";
import React from 'react'

import Main from "./Main";
import {ADD_NEW_POST_TEXT, UPDATE_NEW_POST_TEXT} from "../../../Redux/ActionTypes";
import {getProfile} from "../../../api/api";
import {setPhotoUser} from "../../../Redux/Reducers/ProfileReducer";
import {withRouter} from "react-router-dom";


class MainContainer extends React.Component {
    componentDidMount() {
        debugger
        getProfile(this.props.match.params.userID).then(response =>{
            this.props.setPhotoUser(response.photos.large);
        })
    }

    render() {
        return <Main {...this.props} />
    }
}



let mapStateToProps = (state) => ( {
    profilePage:state.ProfilePageReducer.profilePage,
    newPostText:state.ProfilePageReducer.newPostText,
    photo: state.ProfilePageReducer.photo,
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
        }
    }
};

let withURLDataContainerComponent = withRouter (MainContainer);

export default connect(mapStateToProps, mapDispatchToProps)(withURLDataContainerComponent)

