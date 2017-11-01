"use strict";

export default store => next => action => {

    const state = store.getState();
    const authState = state.auth;
    const isAuthenticated = authState.isAuthenticated;

    if (isAuthenticated) {
        if (action.type !== "LOG_IN") {
            next(action);
        } else {
            console.error("Action prevented due to authentication state error.", action);
        }
    } else {
        if (action.type === "LOG_IN") {
            next(action);
        } else {
            console.error("Action prevented due to authentication state error.", action);
        }
    }

};