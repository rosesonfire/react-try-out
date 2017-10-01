import React, { Component } from 'react';

export default class Head extends Component {
   constructor() {
      super();
   }

   render() {
      return <head>        
          {this.props.styleRefs.map(style => {
            return <link rel="stylesheet" type="text/css" href={style} />;
          })}
      </head>
   }
}