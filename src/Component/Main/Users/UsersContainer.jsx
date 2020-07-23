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
import {
    getCurrentPage, getDisabled,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../../Redux/Reducers/usersSelectors";
import {getStatusThunk} from "../../../Redux/Reducers/ProfileReducer";


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
             <Users {...this.props}  pages={pages} followUser={userAPI.followUser} unfollowUser={userAPI.unfollowUser}
                    currentPage={this.props.currentPage} totalItemsCount={this.props.totalUsers} pageSize={this.props.pageSize}/>
            )

    }
}


/*let mapStateToProps = (state) => {
    return {
        users: state.UsersPageReducer.users,
        pageSize: state.UsersPageReducer.pageSize,
        totalUsers: state.UsersPageReducer.totalUsers,
        currentPage:state.UsersPageReducer.currentPage,
        isFetching: state.UsersPageReducer.isFetching,
        Disabled:state.UsersPageReducer.isDisabled,

    }
};*/

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsers: getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching: getIsFetching(state),
        Disabled:getDisabled(state),
    }
};


export default compose(
    connect(mapStateToProps, {
        getUserAC,
        followUserThunk,
        unfollowUserThunk,
        onPageChangedThunk,
            getStatusThunk,
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
