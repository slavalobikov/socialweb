import {connect} from "react-redux";
import React from "react"
import Users from "./Users";
import {
    follow,
    isFetchingFalse,
    isFetchingTrue,
    setCurrent,
    setTotalUsersCount,
    setUsers, unfollow
} from "../../../Redux/Reducers/UsersReducer";
import {getUsers} from "../../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
            this.props.isFetchingTrue();
            getUsers(this.props.currentPage, this.props.pageSize ).then(response => {
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount);
            this.props.isFetchingFalse();
        });



            };


    render() {

        let pagesCount = Math.ceil(this.props.totalUsers/this.props.pageSize);
        let pages = [];
        for (let i =1; i<= pagesCount; i++) {
            pages.push(i);
        }
        return (
             <Users {...this.props}  pages={pages}   />
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

    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow:(userID) => {
            dispatch(follow(userID));
        },
        unfollow:(userID) => {
            dispatch(unfollow(userID));
        },
        setUsers:(users) => {
            dispatch(setUsers(users));
        },
        setCurrent:(pageNumber) => {
            dispatch(setCurrent(pageNumber))
        },
        setTotalUsersCount:(totalCount) => {
            dispatch(setTotalUsersCount(totalCount))
        },
        isFetchingTrue:() => {
            dispatch(isFetchingTrue())
        },
        isFetchingFalse:()=> {
            dispatch(isFetchingFalse())
        }
    }
};*/
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrent,
    setTotalUsersCount,
    isFetchingTrue,
    isFetchingFalse,
    }
)(UsersContainer);