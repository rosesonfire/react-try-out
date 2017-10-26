"use strict";

import React, { Component } from "react";

export default class Login extends Component {
    
    static get id() {
        return "page_login";
    }
    
    static get title() {
        return "Login View";
    }

    static get color() {
        return "green";
    }

    static get description() {
        return "What you see for logging in";
    }

    static get href() {
        return "/login";
    }
    
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    authenticate() {

        const authData = {
            username: this.state.username,
            password: this.state.password
        };

        const jsonAuthData = JSON.stringify(authData);

        fetch("/service/authenticate", {
            method: "POST",
            body: jsonAuthData,
            headers: new Headers({
                "content-type": "application/json"
            })
        })
    }

    setUsername(event) {
        this.setState({ username: event.target.value });
    }

    setPassword(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.authenticate.bind(this)}>
                    <input type="text" onChange={this.setUsername.bind(this)}/><br />
                    <input type="password" onChange={this.setPassword.bind(this)}/><br />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}