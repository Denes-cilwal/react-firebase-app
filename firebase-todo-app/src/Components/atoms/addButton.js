import React from "react";
import Button from '@material-ui/core/Button';

export const AddButtonComponent = (props) =>{
return(
    <div>
        <Button 
        disabled={!props.input} 
        variant="contained" 
        color="primary" 
        type="submit" 
        onClick={props.addTodosHandler}>
        Add-Todo
        </Button>
    </div>
)

}