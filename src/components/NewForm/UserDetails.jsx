import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function UserDetails(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };


  const { values, handleChange } = props;
  return (
    <>
    
      <h1>Enter User details</h1>
      <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
        <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
      <div>
            <Button
              color="primary"
              variant="contained"
              onClick={next}
              className="button"
            >Next</Button>
      </div>
    </>
  );
}