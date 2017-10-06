"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YearlyEvents from './pages/yearlyEvents';
import MeetingEvents from './pages/meetingEvents';
import Home from './pages/home';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import fetch from 'node-fetch';
import PageFactory from './factories/pageFactory';

export default class App extends Component {
    constructor(props) {

        super(props);
        this.state = {
            pages: []
        }

        this.pageFactory = new PageFactory();
        this.fetchPages();

    }

    setPages(pages) {
        
        this.setState({
            pages: pages
        });

    }

    fetchPages() {

        const setPages = this.setPages.bind(this);
        
        fetch("http://localhost:8080/service/permissions/pages")
            .then(response => {
                
                return response.json();

            })
            .then(responseIds => {
                
                const responsePages = responseIds.map(id => {
                    return this.pageFactory.getPage(id);
                });

                setPages(responsePages);

            });
    }

    render() {

        return (
            <BrowserRouter>
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
            </BrowserRouter>);

    }
}

ReactDOM.render(<App />, document.getElementById("main-container"));