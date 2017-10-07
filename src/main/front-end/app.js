"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Link, Route } from 'react-router-dom';
import fetch from 'node-fetch';
import YearlyEvents from './pages/yearlyEvents';
import MeetingEvents from './pages/meetingEvents';
import Home from './pages/home';
import PageFactory from './factories/pageFactory';

export default class App extends Component {
    constructor(props) {

        super(props);
        this.state = {
            pages: []
        }

        this.pageFactory = new PageFactory();
        this.fetchPages(this.pageFactory, this.setPages.bind(this));

    }

    setPages(pages) {
        
        this.setState({
            pages: pages
        });

    }

    async fetchPages(pageFactory, setPages) {
        
        const response = await fetch("http://localhost:8090/service/permissions/pages");
        const responseIds = await response.json();
        const responsePages = responseIds.map(id => {
            return pageFactory.getPage(id);
        });
        
        setPages(responsePages);

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

ReactDOM.render(<App />, document.getElementById("main-container"));