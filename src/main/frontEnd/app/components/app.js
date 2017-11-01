"use strict";

import React, { Component } from "react";
import { HashRouter, Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout } from "./../actions/auth";
import { fetchPages } from "./../actions/pages";
import { fetchUserData } from "./../actions/fb";

@connect(store => {

    return {
        pages: (store.pages && store.pages.pages) ? store.pages.pages : [],
        isAuthenticated: store.auth.isAuthenticated
    }

}, dispatch => {

    const onLogin = () => {
        dispatch(login);
        dispatch(fetchPages);
        dispatch(fetchUserData);
    };

    const onLogout = () => {
        dispatch(logout);
    };

    // use RxJS to do this kinda stuff
    window.streamAuthStatus(onLogin, onLogout);

    return {};

})
export default class App extends Component {

    render() {

        if (this.props.isAuthenticated) {

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

        } else if (this.props.isAuthenticated === false) {
            
            return <div>Please login</div>
        } else {

            return (
                <div>Loading ...</div>
            )
        }

    }
}