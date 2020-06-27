import {connect} from "react-redux";
import React from "react"
import Users from "./Users";
import {FollowAC, UnFollowAC} from "../../../Redux/ActionTypes";
import * as axios from 'axios';
import {setCurrent, setTotalUsersCount, setUsers} from "../../../Redux/Reducers/UsersReducer";
import {getUsers} from "../../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
            getUsers(this.props.currentPage, this.props.pageSize ).then(response => {
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount);
        });



            };


    render() {

        let pagesCount = Math.ceil(this.props.totalUsers/this.props.pageSize);
        let pages = [];
        for (let i =1; i<= pagesCount; i++) {
            pages.push(i);
        }
        debugger
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

    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        follow:(userID) => {
            dispatch(FollowAC(userID));
        },
        unfollow:(userID) => {
            dispatch(UnFollowAC(userID));
        },
        setUsers:(users) => {
            dispatch(setUsers(users));
        },
        setCurrent:(pageNumber) => {
            dispatch(setCurrent(pageNumber))
        },
        setTotalUsersCount:(totalCount) => {
            dispatch(setTotalUsersCount(totalCount))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);