"use strict";

export default function pages(state={}, action) {

    switch(action.type) {
        case "FETCH_PAGES_FULFILLED": state = {
            ...state,
            pages: action.payload
        }
        break;
        case "CLEAR_PAGES": state = {
            ...state,
            pages: []
        }
    }

    return state;

}