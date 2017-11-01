"use strict";

export default (state={}, action) => {
    
    switch(action.type) {
        case "FETCH_PAGES_FULFILLED": state = {
            ...state,
            pages: action.payload
        }
        break;
    }

    return state;

};