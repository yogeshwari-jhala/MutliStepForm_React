import React from "react";
import Button from '@material-ui/core/Button';
import { TextField, Typography, Paper, Select , FormControl, InputLabel, MenuItem} from '@material-ui/core';

export const Supliment = ({nextStep,prevStep,bookData, setBookData}) => {
    const next = (e) => {
        e.preventDefault();
        nextStep();
      };
    
      const back = (e) => {
        e.preventDefault();
        prevStep();
      };

    return (
      <>
  
  
        <TextField name="name" required type="text" variant="outlined" label="Name" fullWidth defaultValue={bookData.supliment.name} onChange={(e) => setBookData({ ...bookData,supliment: {...bookData.supliment , name: e.target.value }})} />
        <TextField name="remarks" required type="text" variant="outlined" label="Remarks" fullWidth defaultValue={bookData.supliment.remarks} onChange={(e) => setBookData({ ...bookData, supliment: {...bookData.supliment , remarks: e.target.value } })} />
        <TextField name="types" required type="text" variant="outlined" label="Types" fullWidth defaultValue={bookData.supliment.types} onChange={(e) => setBookData({ ...bookData, supliment: {...bookData.supliment , types: e.target.value }})} />
      
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
  };