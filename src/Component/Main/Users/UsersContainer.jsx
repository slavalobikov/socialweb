import {connect} from "react-redux";
import Users from "./Users";
import {FollowAC, UnFollowAC} from "../../../Redux/ActionTypes";


let mapStateToProps = (state) => {
    return {
        users: state.UsersPageReducer.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow:(userID) => {
            dispatch(FollowAC(userID));
        },
        unfollow:(userID) => {
            dispatch(UnFollowAC(userID));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);