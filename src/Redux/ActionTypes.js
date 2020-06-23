export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

export const UPDATE_NEW_POST_TEXT = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text

    }
};
export const ADD_NEW_POST_TEXT = () => {
    return {
        type: ADD_NEW_POST_TEXT,
    }
};


export const FollowAC = (userID) => {
  return {
      type:FOLLOW_USER,
      userID
  }
};

export const UnFollowAC = (userID) => {
    return {
        type:UNFOLLOW_USER,
        userID
    }
};