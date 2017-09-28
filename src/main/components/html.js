import React, { Component } from 'react';
import Container from './container';

export default class Html extends Component {
    constructor() {
        super();
    }

    render() {
        return <html>
            {this.props.head}
            {this.props.body}
        </html>
    }
}