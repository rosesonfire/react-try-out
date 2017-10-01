"use strict";

import React, { Component } from 'react';
import Html from './../components/html';
import Head from './../components/head';
import Body from './../components/body';
import Container from './../components/container';

export default class Index extends Component {
    constructor() {
        super();
    }

    render() {

        const styleRefs = [
            "components.css"
        ];        
        const head = <Head styleRefs={styleRefs} />;
        const body = <Body>
                        <Container>
                            <div>
                                <h1>Hello world</h1>
                            </div>
                        </Container>
                    </Body>;

        return <Html head={head} body={body}/>;
    }
}