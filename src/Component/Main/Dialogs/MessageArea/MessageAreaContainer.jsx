import {connect} from "react-redux";


import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";
import MessageArea from "./MessageArea";



let mapStateToProps = (state) => ( {
    dialogsReducer:state.dialogsReducer,
    profile: state.ProfilePageReducer.profile,

});



export default compose (
    connect(mapStateToProps,),
    withRouter,
    withAuthRedirect,
    /*withProfileInfo,*/
)(MessageArea)