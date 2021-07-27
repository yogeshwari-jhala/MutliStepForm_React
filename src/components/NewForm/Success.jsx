import React from "react";
import TextField from '@material-ui/core/TextField';
import { Card, List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export default function Success() {

  return (
    <>
    
      <Card className="card">
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
            </Card>
    </>
  );
}
