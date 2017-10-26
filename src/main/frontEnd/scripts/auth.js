"use strict";

const fbInitEvent = new Event("FBInit");

window.fbAsyncInit = function() {
    FB.init({
    appId      : "126508851392364",
    cookie     : true,
    xfbml      : true,
    version    : 'v2.10'
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
}(document, 'script', 'facebook-jssdk'));

const awaitFB = new Promise((success, failure) => {
    
    try {
        window.addEventListener("FBInit", (event) => {
            success(true);
        });
    } catch (e) {
        failure(e.message);
    }

});

async function getAuthStatus() {

    await awaitFB;

    const authStatus = await new Promise((success, failure) => {
        
        try {
            FB.getLoginStatus(success);
        } catch (e) {
            failure(e.message);
        }        

    });

    return authStatus;

}

function checkAuthentication(authStatus) {
    
    const _isAuthenticated = authStatus && authStatus.status === "connected";
    
    return _isAuthenticated;

}

async function isAuthenticated() {

    await awaitFB;
    
    const authStatus = await getAuthStatus();
    const _isAuthenticated = checkAuthentication(authStatus);

    return _isAuthenticated;

}

export async function trackAuth(callBack) {

    await awaitFB;

    FB.Event.subscribe("auth.statusChange", authStatus => {
        
        const _isAuthenticated = checkAuthentication(authStatus);

        callBack(_isAuthenticated);

    });

    const _isAuthenticated = await isAuthenticated();

    callBack(_isAuthenticated);

}

export async function getAuthKey() {
    
    await awaitFB;

    const authStatus = await getAuthStatus();
    const _isAuthenticated = checkAuthentication(authStatus);
    
    if (_isAuthenticated) {

        return authStatus.authResponse.accessToken;
    }

    return Error("Failed to authenticate");

}