"use strict";

import React, { Component } from "react";
import { HashRouter, Link, Route } from "react-router-dom";

export default class App extends Component {
    constructor(props) {

        super(props);

    }

    render() {

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

    }
}