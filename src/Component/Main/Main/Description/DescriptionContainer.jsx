import {connect} from "react-redux";
import Description from "./Description";
import {saveProfile} from "../../../../Redux/Reducers/ProfileReducer";

let mapStateToProps = (state) => ( {
    profile:state.ProfilePageReducer.profile
});

export default connect(mapStateToProps,{saveProfile})(Description)