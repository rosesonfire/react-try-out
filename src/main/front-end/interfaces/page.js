import React, { Component } from 'react';

export default class Page extends Component
{
    static get id() {
        return "page_default";
    }
    
    static get title() {
        return "No title";
    }

    static get color() {
        return "white";
    }

    static get description() {
        return "No description";
    }

    static get href() {
        return "#";
    }
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div></div>
        );
    }
}