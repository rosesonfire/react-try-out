"use strict";

import React, { Component } from "react";
import { HashRouter, Link, Route } from "react-router-dom";
import registeredPages from "./../../registry/pages";

export default class App extends Component {
    
    constructor(props) {

        super(props);

        this.state = {
            pages: [],
            _isAuthenticated: null
        }

        window.trackAuth(function(_isAuthenticated) {
            
            this.setState({_isAuthenticated: _isAuthenticated});

            if (_isAuthenticated) {
                this.fetchPages();
            }

        }.bind(this));

    }

    async fetchPages() {
        
        const authKey = await window.getAuthKey();
        const response = await fetch("/service/pages", {
            method: "GET",
            headers: new Headers({
                authentication: authKey
            })
        });
        
        if (response.status !== 200) {
            throw new Error("Status error " + response.status);
        }
    
        const responseIds = await response.json();
        const pages = registeredPages.filter(page => responseIds.includes(page.id));
    
        this.setState({pages: pages});
    
    }

    render() {

        if (this.state._isAuthenticated === null) {
            return (
                <div>Loading ...</div>
            )
        } else if (this.state._isAuthenticated === false) {
            
            return <div>Please login</div>
        }
        else if (this.state._isAuthenticated) {

            return (
                <HashRouter>
                    <div>
                        <div>
                            <ul className="nav nav-tabs">
                                {
                                    this.state.pages.map((page, i) => {
                                        return (
                                            <li key={i}><Link to={page.href}>{page.title}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        {
                            this.state.pages.map((page, i) => {
                                return (
                                    <Route path={page.href} component={page} key={i}/>
                                )
                            })
                        }
                    </div>
                </HashRouter>);
        } else {
            throw new Error("Something's wrong");
        }

    }
}