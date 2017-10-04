"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YearlyEvents from './pages/yearlyEvents';
import MeetingEvents from './pages/meetingEvents';
import Home from './pages/home';
import { BrowserRouter, Link, Route } from 'react-router-dom'

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    getPages() {
        return [
            Home,
            YearlyEvents,
            MeetingEvents
        ]
    }

    render() {

        const pages = this.getPages();
        return (
            <BrowserRouter>
                <div>
                    <div>
                        <ul className="nav nav-tabs">
                            {
                                pages.map((page, i) => {
                                    return (
                                        <li key={i}><Link to={page.href}>{page.title}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {
                        pages.map((page, i) => {
                            return (
                                <Route path={page.href} component={page} key={i}/>
                            )
                        })
                    }
                </div>
            </BrowserRouter>);
    }
}

ReactDOM.render(<App />, document.getElementById("main-container"));