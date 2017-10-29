"use strict";

import React, { Component } from "react";

export default class Home extends Component {
    
    static get id() {
        return "page_home";
    }
    
    static get title() {
        return "Home";
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

        this.state = {
            profilePicture: "/profile_picture.png"
        };

        this.setProfilePic();
    }

    async setProfilePic() {

        const ppRes = await window.fbAPI("me/picture");
        const ppUrl = ppRes.data.url;

        this.setState({profilePicture: ppUrl});
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <img src={this.state.profilePicture} />
            </div>
        )
    }
}