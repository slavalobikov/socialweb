import {connect} from "react-redux";
import React from "react"
import Users from "./Users";
import {
    follow, followUserThunk, getUserAC, isDisabled,
    isFetchingFalse,
    isFetchingTrue, onPageChangedThunk,
    setCurrent,
    setTotalUsersCount,
    setUsers, unfollow, unfollowUserThunk
} from "../../../Redux/Reducers/UsersReducer";

import {followUser} from "./../../../api/api";
import {unfollowUser} from "./../../../api/api"


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
             <Users {...this.props}  pages={pages} followUser={followUser} unfollowUser={unfollowUser}  />
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


export default connect(mapStateToProps, {
/*    follow,
    unfollow,
    setUsers,
    setCurrent,
    setTotalUsersCount,
    isFetchingTrue,
    isFetchingFalse,
    isDisabled,*/
    getUserAC,
    followUserThunk,
    unfollowUserThunk,
    onPageChangedThunk,
    }
)(UsersContainer);