"use strict";

const fbInitEvent = new Event("FBInit");

window.fbAsyncInit = function() {
    FB.init({
    appId      : "126508851392364",
    cookie     : true,
    xfbml      : true,
    version    : "v2.10"
    });
    
    FB.AppEvents.logPageView();

    window.dispatchEvent(fbInitEvent);
    
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);                    
}(document, "script", "facebook-jssdk"));

// Custom utility functions

const awaitFB = new Promise((success, failure) => {
    
    try {
        window.addEventListener("FBInit", (event) => {
            success(true);
        });
    } catch (e) {
        failure(e.message);
    }

});

const getAuthStatus = async () => {
    
    await awaitFB;

    const authStatus = await new Promise((success, failure) => {
        
        try {
            FB.getLoginStatus(success);
        } catch (e) {
            failure(e.message);
        }        

    });

    return authStatus;

};

const checkAuthentication = (authStatus) => {
    
    const isAuthenticated = authStatus && authStatus.status === "connected";
    
    return isAuthenticated;

};

// TODO: do this with RxJX
const awaitFBReAuth = async () => {

    await awaitFB;

    const reAuthStatus = await new Promise((success, failure) => {
        
        try {
            const callback = authStatus => {
                
                const isAuthenticated = checkAuthentication(authStatus);
                
                if (isAuthenticated) {
                    FB.Event.unsubscribe("auth.statusChange", callback);
                    success(authStatus)
                }
        
            }
        
            FB.Event.subscribe("auth.statusChange", callback);
        } catch(e) {
            failure(e);
        }

    });

    return reAuthStatus;
};

const awaitFBAuth = async () => {

    await awaitFB;

    const authStatus = await getAuthStatus();
    const isAuthenticated = checkAuthentication(authStatus);

    if (isAuthenticated) {
        
        return authStatus;
    } else {
        const reAuthStatus = await awaitFBReAuth();
        
        return reAuthStatus;
    }

};

export const getAuthKey = async () => {
    
    const authStatus = await awaitFBAuth();
    
    return authStatus.authResponse.accessToken;

};

export const fbAPI = async (query) => {

    await awaitFBAuth();

    const _fbAPI = await new Promise((success, failure) => {
        
        try {
            FB.api(query, success);
        } catch (e) {
            failure(e);
        }

    });

    return _fbAPI;

};

// TODO: do this with RxJX
export const streamAuthStatus = async (onLogin, onLogout) => {
    
    await awaitFB;

    const _callback = function(authStatus) {
        
        if (authStatus.status) {

            const isAuthenticated = checkAuthentication(authStatus);

            if (isAuthenticated) {
                onLogin();
            } else {
                onLogout();
            }
        }

    }

    FB.Event.subscribe("auth.statusChange", _callback);

    const authStatus = await getAuthStatus();    
    _callback(authStatus);

}