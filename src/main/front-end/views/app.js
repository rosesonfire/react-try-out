"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from './../components/container';

export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        const container = (
        <Container>
            <div>
                <h1>Hello world</h1>
            </div>
        </Container>);
        
        return container;
    }
}

ReactDOM.render(<App />, document.getElementById("main-container"));