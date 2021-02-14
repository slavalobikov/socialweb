import {connect, ConnectedProps} from "react-redux";
import React from "react"
import Users from "./Users";
import {
    followUserThunk, getAddUsersThunk, getUserAC,
    onPageChangedThunk,
    unfollowUserThunk
} from "../../../Redux/Reducers/UsersReducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getDisabled,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../../Redux/Reducers/usersSelectors";
import { AppStateType } from "../../../Redux/ReduxStore";
import {UsersType} from "../../../Types/types";

type MapStatePropsType = {
    users: Array<UsersType>,
    isFetching: boolean,
    currentPage: number,
    pageSize: number,
    Disabled: Array<number>,
    totalUsers:number,
}

type MapDispatcPropsType = {
    getUserAC: (currentPage: number, pageSize: number) => void
    followUserThunk: (id: number) => void
    unfollowUserThunk: (id: number) => void
    onPageChangedThunk: (pageNumber: number, pageSize: number) => void
    getAddUsersThunk: (currentPage: number, pageSize: number) => void,

}

type OwnPropsType = {

}


type PropsTypes = MapStatePropsType & MapDispatcPropsType & OwnPropsType;


class UsersContainer extends React.Component<PropsTypes> {

    componentDidMount() {
            const {currentPage, pageSize} = this.props;
            this.props.getUserAC(currentPage, pageSize);
            };
    render() {
        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize);
        let pages = [];
        for (let i =1; i<= pagesCount; i++) {
            pages.push(i);
        }
        return (
             <Users
                    pagesCount={pagesCount}
                    {...this.props}
             />
            )

    }
}



let mapStateToProps = (state: AppStateType): MapStatePropsType => {

    return {
        users: getUsers(state),
        isFetching: getIsFetching(state),
        currentPage:getCurrentPage(state),
        pageSize: getPageSize(state),
        Disabled:getDisabled(state),
        totalUsers: getTotalUsersCount(state),

    }
};


export default compose(
    connect//<MapStatePropsType, MapDispatcPropsType, AppStateType>
    (mapStateToProps, {
        getUserAC,
        followUserThunk,
        unfollowUserThunk,
        onPageChangedThunk,
        getAddUsersThunk,
    }
    ),
    withAuthRedirect,
)(UsersContainer)

