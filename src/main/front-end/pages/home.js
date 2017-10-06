"use strict";

import React from 'react';
import Page from './../interfaces/page';

export default class Home extends Page {
    
    static get id() {
        return "page_home";
    }
    
    static get title() {
        return "Home View";
    }

    static get color() {
        return "green";
    }

    static get description() {
        return "Landing view";
    }

    static get href() {
        return "/home";
    }
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div><h1>Home</h1></div>
        )
    }
}