import {connect} from "react-redux";
/*
import React from 'react'
*/

import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";
import MessageArea from "./MessageArea";



let mapStateToProps = (state) => ( {
    dialogsReducer:state.dialogsReducer,
});



export default compose (
    connect(mapStateToProps, {}),
    withRouter,
    withAuthRedirect,
    /*withProfileInfo,*/
)(MessageArea)