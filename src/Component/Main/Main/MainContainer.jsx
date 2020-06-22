import React from 'react';
import Main from "./Main";
import {connect} from "react-redux";
import {UPDATE_NEW_POST_TEXT} from "../../../Redux/ActionTypes";




/*
class MainContainer extends React.Component {
    render() {
        return ( <Main profilePage={this.props.profilePage}
                        newPostText={this.props.newPostText}
                        updateNewPostText={this.prop}/>

        )
    }
}
*/


let mapStateToProps = (state) => ( {
    profilePage:state.ProfilePageReducer.profilePage,
    newPostText:state.ProfilePageReducer.newPostText
});

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText:(text) => {
            dispatch(UPDATE_NEW_POST_TEXT(text))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Main)

