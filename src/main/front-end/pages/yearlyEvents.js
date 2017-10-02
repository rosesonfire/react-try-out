"use strict";

import React from 'react';
import Page from './../interfaces/page';

export default class YearlyEvents extends Page {
    
    static get title() {
        return "Yearly Events";
    }

    static get color() {
        return "blue";
    }

    static get description() {
        return "Contains yearly recurring events like birthdays, anniversaries, etc";
    }

    static get href() {
        return "/yearly-events";
    }
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div><h1>Yearly events</h1></div>
        )
    }
}