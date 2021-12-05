import React from "react";
import Button from '@material-ui/core/Button';


export const UpdateButtonComponent = (props) => {
    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                type="submit"
                onClick={() => props.updateTodos()}
            >
                Update-Todo
            </Button>
        </div>
    )
}