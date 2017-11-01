"use strict";

export default (state={}, action) => {

    switch(action.type) {
        case "FETCH_USER_DATA_FULFILLED": state = {
            ...state,
            userName: action.payload.name,
            profilePicture: action.payload.picture.data.url  
        }
        break;
    }

    return state;

};