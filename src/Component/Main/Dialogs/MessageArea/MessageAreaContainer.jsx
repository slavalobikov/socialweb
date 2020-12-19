import {connect} from "react-redux";


import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";
import MessageArea from "./MessageArea";
import {addMessage} from "../../../../Redux/Reducers/DialogReducer";



let mapStateToProps = (state) => ( {
    dialogsReducer:state.dialogsReducer,
    profile: state.ProfilePageReducer.profile,

});



export default compose (
    connect(mapStateToProps,{addMessage} ),
    withRouter,
    withAuthRedirect,
    /*withProfileInfo,*/
)(MessageArea)