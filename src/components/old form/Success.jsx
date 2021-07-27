import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Card } from '@material-ui/core';
import "./Style.css";

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
        <>
            <AppBar position="static" className="bar">Success</AppBar>
            <Card className="card">
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
            </Card>
        </>
     
    );
  }
}

export default Success;