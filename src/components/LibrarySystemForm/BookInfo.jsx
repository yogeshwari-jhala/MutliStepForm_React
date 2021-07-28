import React from "react";
import Button from '@material-ui/core/Button';
import { TextField, Typography, Paper, Select , FormControl, InputLabel, MenuItem} from '@material-ui/core';

export const BookInfoForm = ({nextStep, prevStep, bookData , setBookData}) => {
    const next = (e) => {
        e.preventDefault();
        nextStep();
      };
      let options = null;
    let type = null;
  
  /** This will be used to create set of options that user will see */
const fictions = ['Action and adventure', 'Anthology', `Classic`, `Coming-of-age`, `Drama`, `Graphic novel`,`Historical fiction`, `Picture book`, `Poetry`, `Science fiction`, `Short story`, `Thriller`]

const nonFictions = [`Art/architecture`, `Autobiography`, `Biography`, `Business/economics`, `Diary`, `Dictionary`, `Encyclopedia`, `Guide`, `Health/fitness`, `History`, `Journal`, `Math`, `Philosophy`, `Religion`, `spirituality, and new age`, `Textbook`, `Review`, `Science`, `Sports and leisure`, `Travel`]

    if (bookData.genre === "Fiction") {
      type = fictions;
    } else if (bookData.genre === "Non Fiction") {
      type = nonFictions;
    } 
    if (type) {
      options = type.map((el) => 
      <MenuItem value={el} key={el}>{el}</MenuItem>);
    }
    return (
      <>
      <h1>Books Details</h1>
      <TextField name="title" required type="text" variant="outlined" label="Title" fullWidth defaultValue={bookData.title} onChange={(e) => setBookData({ ...bookData, title: e.target.value })} />
        <TextField name="author" required type="text" variant="outlined" label="Author" fullWidth defaultValue={bookData.author} onChange={(e) => setBookData({ ...bookData, author: e.target.value })} />
        <TextField name="publisher" required type="text" variant="outlined" label="Publisher" fullWidth defaultValue={bookData.publisher} onChange={(e) => setBookData({ ...bookData, publisher: e.target.value })} />
        <TextField name="year" required type="number" variant="outlined" label="Year" fullWidth defaultValue={bookData.year} onChange={(e) => setBookData({ ...bookData, year: e.target.value })} />
        <FormControl variant="outlined"  fullWidth >
        <InputLabel id="demo-simple-select-outlined-label" required>Genre</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          defaultValue={bookData.genre}
          onChange={(e) => setBookData({ ...bookData, genre: e.target.value })}
          label="Genre"
          required
          type="text"
        >
            <MenuItem value="Fiction">Fiction</MenuItem>
            <MenuItem value="Non Fiction">Non Fiction</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" fullWidth >
          <InputLabel id="demo-simple-select-outlined-label" required>Category</InputLabel>
          <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          defaultValue={bookData.category}
          onChange={(e) => setBookData({ ...bookData, category: e.target.value })}
          required
          type="text"
          label="Category">
                {
                  /** This is where we have used our options variable */
                  options
                }
          </Select>
          </FormControl>
        <TextField name="edition" required type="number" variant="outlined" label="Edition" fullWidth defaultValue={bookData.edition} onChange={(e) => setBookData({ ...bookData, edition: e.target.value })} />
        <TextField name="length" required type="number" variant="outlined" label="Length" fullWidth defaultValue={bookData.length} onChange={(e) => setBookData({ ...bookData, length: e.target.value })} />
        <TextField name="language" required type="text" variant="outlined" label="Language" fullWidth defaultValue={bookData.language} onChange={(e) => setBookData({ ...bookData, language: e.target.value })} />
        <Button
              color="primary"
              variant="contained"
              onClick={next}
              className="button"
            >Next</Button>
      </>
    );
  };