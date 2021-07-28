import './App.css';
import React from 'react';
import LibraryForm from './components/LibrarySystemForm/LibraryForm';
import { EditIconComponent } from './components/LibrarySystemForm/EditIcon/EditIconComponent';
import { Button, Modal,  CardActions} from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import Form from './components/NewForm/Form.jsx';

function App() {
    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const handleOpen = () => {
      setOpen(true);
    };

    function getModalStyle() {
      const top = 25;
      return {
        top: `${top}%`,
         margin:'auto'
      };
    }
    const handleClose = () => {
      setOpen(false);
    };

  const body = (
    <div style={modalStyle} className="paper" >
      <LibraryForm/>
    </div>
  );


  return (
    <div>
   <div>
     <Button style={{marginLeft: '60px'}} variant="contained" color="primary" size="small" onClick={handleOpen}>
            Add Book
    </Button>
    <Modal
            style={{ overflow: 'scroll', display:'flex',alignItems:'center',justifyContent:'center'}}
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
           {body}
          </Modal>
   </div>
   <div>
     <EditIconComponent  handleOpen={handleOpen}/>
   </div>
   </div>
  );
}

export default App;
