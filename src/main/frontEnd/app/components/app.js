"use strict";

import React, { Component } from "react";
import { HashRouter, Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPages, clearPages } from "./../actions/pages";
import { setLoginStatus, fetchUserData, clearUserData } from "./../actions/fb";

@connect(store => {

    return {
        pages: (store.pages && store.pages.pages) ? store.pages.pages : [],
        isAuthenticated: store.fb.isAuthenticated
    }

}, dispatch => {

    // use RxJS to do this kinda stuff
    window.streamAuthStatus((isAuthenticated) => {

        dispatch(setLoginStatus(isAuthenticated));

        if (isAuthenticated === "connected") {
            dispatch(fetchPages());
            dispatch(fetchUserData());
        } else {
            dispatch(clearPages());
            dispatch(clearUserData());
        }
        

    });

    return {};

})
export default class App extends Component {

    render() {

        if (this.props.isAuthenticated === "connected") {

            return (
                <HashRouter>
                    <div>
                        <div>
                            <ul className="nav nav-tabs">
                                {
                                    this.props.pages.map((page, i) => {
                                        return (
                                            <li key={i}><Link to={page.href}>{page.title}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        {
                            this.props.pages.map((page, i) => {
                                return (
                                    <Route path={page.href} component={page} key={i}/>
                                )
                            })
                        }
                    </div>
                </HashRouter>);

        } else if (this.props.isAuthenticated) {
            
            return <div>Please login</div>
        } else {

            return (
                <div>Loading ...</div>
            )
        }

    }
}