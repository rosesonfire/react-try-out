import React, { Component } from "react";

export default class MeetingEvents extends Component {
  
  static get id() {
    return "page_meeting_events";
  }
  
  static get title() {
    return "Meeting events";
  }

  static get color() {
    return "white";
  }

  static get description() {
    return "Contains details about meetings";
  }

  static get href() {
    return "/meeting-events";
  }
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div><h1>Meetings</h1></div>
    );
  }
}