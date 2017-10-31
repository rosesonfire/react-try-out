"use strict";

export const setLoginStatus = (isAuthenticated) => {
    
    return {
        type: "SET_AUTH",
        payload: { isAuthenticated: isAuthenticated }
    }

}

const _fetchUserData = async () => {

    const userData = await window.fbAPI("me?fields=id,name,picture");

    return userData;

};

export const fetchUserData = () => {

    return {
        type: "FETCH_USER_DATA",
        payload: _fetchUserData()
    }
    
};

export const clearUserData = () => {
    
        return {
            type: "CLEAR_USER_DATA",
            payload: null
        }
        
    };