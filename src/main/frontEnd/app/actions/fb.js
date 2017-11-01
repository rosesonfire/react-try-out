"use strict";

const _fetchUserData = async () => {

    const userData = await window.fbAPI("me?fields=id,name,picture");

    return userData;

};

export const fetchUserData = {
    type: "FETCH_USER_DATA",
    payload: _fetchUserData()
};