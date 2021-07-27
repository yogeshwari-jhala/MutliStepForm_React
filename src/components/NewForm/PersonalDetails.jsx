import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function PersonalDetails(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, handleChange } = props;
  return (
    <>
    
      <h1>Enter personal details</h1>
      <TextField
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth
        />
        <TextField
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              margin="normal"
              fullWidth
            />
      <div>
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
      </div>
    </>
  );
}