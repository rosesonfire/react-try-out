"use strict";

import React from 'react';
import Page from './../interfaces/page';
import InfiniteCalendar from 'react-infinite-calendar';

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

    getData() {
        const todayDate = new Date();
        const currentYear = todayDate.getFullYear();

        return {
            todayDate: todayDate,
            fromDate: new Date(currentYear, 1, 1),
            toDate: new Date(currentYear, 12, 31)
        }
    }

    click(date) {
        console.log("clicked", date);
    }

    render() {

        const data = this.getData();

        return (
            <div>
                <InfiniteCalendar
                    width={400}
                    height={600}
                    selected={data.todayDate}
                    min={data.fromDate}
                    minDate={data.fromDate}
                    max={data.toDate}
                    maxDate={data.toDate}
                    onSelect={this.click.bind(this)}
                />
            </div>
        )
    }
}