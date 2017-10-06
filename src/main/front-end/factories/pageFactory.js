import Home from './../pages/home';
import MeetingEvents from './../pages/meetingEvents';
import YearlyEvents from './../pages/yearlyEvents';

export default class PageFactory {
    
    constructor() {

        const pages = [
            Home,
            MeetingEvents,
            YearlyEvents
        ]
        
        this.pageMap = pages.reduce((mp, pg) => {
            mp[pg.id] = pg;
            return mp;
        }, {});

    }
    
    getPage(id) {

        return this.pageMap[id];

    }
}

