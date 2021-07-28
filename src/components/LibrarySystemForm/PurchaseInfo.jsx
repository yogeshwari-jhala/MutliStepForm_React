import React from "react";
import Button from '@material-ui/core/Button';
import { TextField,  Typography, Paper, Select , FormControl, InputLabel, MenuItem} from '@material-ui/core';
export const PurchaseInfo = ({nextStep,prevStep,bookData, setBookData}) => {
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
        <TextField name="source" required type="text" variant="outlined" label="Source" fullWidth value={bookData.purchase.source} onChange={(e) => setBookData({ ...bookData,purchase:{...bookData.purchase ,source: e.target.value }})} />
        <TextField name="quantity" required type="number" variant="outlined" label="Quantity" fullWidth value={bookData.purchase.quantity} onChange={(e) => setBookData({ ...bookData,purchase:{...bookData.purchase ,quantity: e.target.value }})} />
        <TextField name="costPB" required type="number" variant="outlined" label="CostPB" fullWidth value={bookData.purchase.costPB} onChange={(e) => setBookData({ ...bookData,purchase:{...bookData.purchase ,costPB: e.target.value }})} />
        <TextField name="total" required type="number" variant="outlined" label="Total" fullWidth value={bookData.purchase.total} onChange={(e) => setBookData({ ...bookData,purchase:{...bookData.purchase ,total: e.target.value }})} />
        <TextField name="currency" required type="text" variant="outlined" label="Currency" fullWidth value={bookData.purchase.currency} onChange={(e) => setBookData({ ...bookData,purchase:{...bookData.purchase ,currency: e.target.value }})} />
        <TextField name="bill" required type="number" variant="outlined" label="Bill" fullWidth value={bookData.purchase.bill.bill} onChange={(e) => setBookData({ ...bookData,purchase:{...bookData.purchase ,bill:{...bookData.purchase.bill, bill : e.target.value }} })} />
        <TextField name="date" type="date" required variant="outlined" fullWidth value={bookData.purchase.bill.date} onChange={(e) => setBookData({ ...bookData,purchase:{...bookData.purchase ,bill:{...bookData.purchase.bill, date : e.target.value }} })} />
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