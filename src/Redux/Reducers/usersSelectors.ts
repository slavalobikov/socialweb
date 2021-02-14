import { AppStateType } from "../ReduxStore";

export const getUsers = (state: AppStateType) => {
    return state.UsersPageReducer.users;
};
export const getPageSize = (state: AppStateType) => {
    return state.UsersPageReducer.pageSize;
};
export const getTotalUsersCount = (state: AppStateType) => {
    return state.UsersPageReducer.totalUsers
};
export const getCurrentPage = (state: AppStateType) => {
    return state.UsersPageReducer.currentPage;
};
export const getIsFetching = (state: AppStateType) => {
    return state.UsersPageReducer.isFetching;
};
export const getDisabled = (state: AppStateType) => {
    return state.UsersPageReducer.isDisabled;
};
export const getStatusThunk = (state: AppStateType) => {
    return state.ProfilePageReducer.status;
};
export const getCountUsersAuto = (state: AppStateType) => {
    return state.UsersPageReducer.countUsersAuto
}
