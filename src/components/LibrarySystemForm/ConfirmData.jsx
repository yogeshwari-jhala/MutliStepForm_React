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
    bookData : { title,
    author,
    publisher,
    genre ,
    category ,
    edition ,
    year ,
    length,
    language ,
    
    name,
    types,
    remarks,

    source,
    quantity,
    costPB ,
    total ,
    currency,
    bill,
    date
  }} = props;
  return (
    <>
    
      <h1>Confirm details</h1>
      <List>
              <ListItem>
                <ListItemText primary="Title" secondary={title} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Author" secondary={author} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Publisher" secondary={publisher} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Genre" secondary={genre} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Category" secondary={category} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Edition" secondary={edition} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Name" secondary={name} />
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