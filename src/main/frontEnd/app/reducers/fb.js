"use strict";

export default function fb(state={}, action) {

    switch(action.type) {
        case "SET_AUTH": state = {
            ...state,
            isAuthenticated: action.payload.isAuthenticated
        }
        break;
        case "FETCH_USER_DATA_FULFILLED": state = {
            ...state,
            userName: action.payload.name,
            profilePicture: action.payload.picture.data.url  
        }
        break;
        case "CLEAR_USER_DATA": state = {
            ...state,
            userName: null,
            profilePicture: null       }
        break;
    }

    return state;

}