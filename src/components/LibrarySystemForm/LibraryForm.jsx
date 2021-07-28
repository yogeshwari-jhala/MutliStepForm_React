import React, { useState } from "react";
import Success from "./SuccessData";
import { BookInfoForm } from "./BookInfo";
import Confirm from "./ConfirmData";
import { PurchaseInfo } from "./PurchaseInfo";
import { Supliment } from "./SuplimentInfo";
import { Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function LibraryForm() {
  const classes = useStyles();
  const [step, setStep] = useState(1);
  const [bookData, setBookData] = useState({ 
    title: "",
    author: "",
    publisher: "",
    genre : "",
    category : "",
    edition : "",
    year : "",
    length: "",
    language : "",
    supliment: [
      {
          name : "",
          types : "",
          remarks : "",
      }
  ],
  purchase : {
    source: "",
    quantity: "",
    costPB : "",
    total : "",
    currency: "",
    bill : {
        bill : "",
        date : ""
    }
  }
});

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);


  const switchStep = () => {
    switch (step) {
      case 1:
        return (
          <BookInfoForm
            nextStep={nextStep}
            bookData={bookData}
            setBookData={setBookData}
          />
        );
      case 2:
        return (
          <Supliment
            nextStep={nextStep}
            prevStep={prevStep}
            bookData={bookData}
            setBookData={setBookData}
          />
        );
      case 3:
        return (
          <PurchaseInfo 
          nextStep={nextStep} 
          prevStep={prevStep} 
          bookData={bookData} 
          setBookData={setBookData}
          />
        );
        case 4:
        return (
          <Confirm 
          nextStep={nextStep} 
          prevStep={prevStep} 
          bookData={bookData} 
          setBookData={setBookData}
          />
        );
      case 5:
        return <Success/>;
      default:
        return null;
    }
  };

  return <>
  <Paper>{switchStep()}</Paper></>;
}