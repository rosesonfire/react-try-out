"use strict";

import React, { Component } from "react";
import { Grid, Row, Col, Image, Label } from 'react-bootstrap';

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
            userName: "Loading...",
            profilePicture: "/profile_picture.png"
        };
        this.setUserName();
        this.setProfilePic();

    }

    async setUserName() {

        const uNameRes = await window.fbAPI("me");
        const uName = uNameRes.name;

        this.setState({userName: uName});

    }

    async setProfilePic() {

        const ppRes = await window.fbAPI("me/picture");
        const ppUrl = ppRes.data.url;

        this.setState({profilePicture: ppUrl});

    }

    render() {
        return (
            <div>
                <h1><Label>{this.state.userName}</Label></h1>
                <Grid>
                    <Row>
                        <Col xs={12} md={12} sm={12}>
                            <Image src={this.state.profilePicture} rounded />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}