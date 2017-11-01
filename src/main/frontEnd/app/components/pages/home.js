import React, { Component } from "react";
import { Grid, Row, Col, Image, Label } from "react-bootstrap";
import { connect } from "react-redux";


@connect(store => {
  
  return {
    userName: store.fb ? store.fb.userName : "Loading...",
    profilePicture: store.fb ? store.fb.profilePicture : "/profile_picture.png"
  };

})
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

  render() {
    return (
      <div>
        <h1><Label>{this.props.userName}</Label></h1>
        <Grid>
          <Row>
            <Col xs={12} md={12} sm={12}>
              <Image src={this.props.profilePicture} rounded responsive/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}