"use strict";

import React, { Component } from 'react';

export default class Body extends Component {
   constructor() {
      super();
   }

   render() {
      return <body>
          {this.props.children}
      </body>;
   }
}