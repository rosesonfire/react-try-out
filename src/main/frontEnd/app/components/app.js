"use strict";

import React, { Component } from "react";
import { HashRouter, Link, Route } from "react-router-dom";
import Home from "./pages/home";

export default class App extends Component {
    constructor(props) {

        super(props);

        this.state = {
            pages: [ Home ]
        }

        this.props.pages.then(this.setPages.bind(this)).catch(err => {

            console.error("Failed to fetch pages from backend...");

        });

    }

    setPages(pages) {

        this.setState({pages: pages});

    }

    render() {

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

    }
}