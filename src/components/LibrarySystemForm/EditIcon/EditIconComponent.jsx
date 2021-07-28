import { Button,   CardActions} from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
export const EditIconComponent = ({handleOpen}) => {
    return (
        <>
        <h1>Here is the Book for Editing</h1>
        <div>
        <CardActions>
          <Button variant="text" color='primary' size="small">
            <EditIcon onClick={handleOpen}/>
          </Button>
        </CardActions>
   </div>
        </>
    )
}