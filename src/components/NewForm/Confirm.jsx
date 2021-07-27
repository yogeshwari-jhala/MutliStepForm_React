import React from "react";
import TextField from '@material-ui/core/TextField';
import { Card, List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export default function Confirm(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const {
    values: { firstName, lastName, email, occupation, city, bio }
  } = props;
  return (
    <>
    
      <h1>Confirm details</h1>
      <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
            </List>
            <br />
      <Button className="btn" onClick={back}
            color="secondary"
            variant="contained">
          Back
          </Button>
          <Button className="btn" onClick={next}
          color="secondary"
          variant="contained"
          >
          Next
          </Button>
    </>
  );
}