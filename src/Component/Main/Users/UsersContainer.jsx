import {connect} from "react-redux";
import React from "react"
import Users from "./Users";
import {
    followUserThunk, getUserAC,
   onPageChangedThunk,
    unfollowUserThunk
} from "../../../Redux/Reducers/UsersReducer";
import {userAPI} from "./../../../api/api";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {

    componentDidMount() {
            this.props.getUserAC(this.props.currentPage, this.props.pageSize);
            };
    render() {
        let pagesCount = Math.ceil(this.props.totalUsers/this.props.pageSize);
        let pages = [];
        for (let i =1; i<= pagesCount; i++) {
            pages.push(i);
        }
        return (
             <Users {...this.props}  pages={pages} followUser={userAPI.followUser} unfollowUser={userAPI.unfollowUser}  />
            )

    }
}


let mapStateToProps = (state) => {
    return {
        users: state.UsersPageReducer.users,
        pageSize: state.UsersPageReducer.pageSize,
        totalUsers: state.UsersPageReducer.totalUsers,
        currentPage:state.UsersPageReducer.currentPage,
        isFetching: state.UsersPageReducer.isFetching,
        Disabled:state.UsersPageReducer.isDisabled,

    }
};

export default compose(
    connect(mapStateToProps, {
        getUserAC,
        followUserThunk,
        unfollowUserThunk,
        onPageChangedThunk,
    }
    ),
    withAuthRedirect,
)(UsersContainer)

/*
export default withAuthRedirect(connect(mapStateToProps, {
    getUserAC,
    followUserThunk,
    unfollowUserThunk,
    onPageChangedThunk,
    }
)(UsersContainer));*/
