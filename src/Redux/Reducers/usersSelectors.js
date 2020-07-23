export const getUsers = (state) => {
    return state.UsersPageReducer.users;
};
export const getPageSize = (state) => {
    return state.UsersPageReducer.pageSize;
};
export const getTotalUsersCount = (state) => {
    return state.UsersPageReducer.totalUsers
};
export const getCurrentPage = (state) => {
    return state.UsersPageReducer.currentPage;
};
export const getIsFetching = (state) => {
    return state.UsersPageReducer.isFetching;
};
export const getDisabled = (state) => {
    return state.UsersPageReducer.isDisabled;
};
export const getStatusThunk = (state) => {
    return state.ProfilePageReducer.status;
};
