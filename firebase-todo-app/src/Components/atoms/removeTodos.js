import React from "react";
import Button from '@material-ui/core/Button';


export const RemoveButtonComponent = (props) => {
    return (
        <div>
            <Button
                variant="contained"
                type="submit"
                onClick={props.removeTodosHandler}
            >
                Remove-Todo
            </Button>
        </div>
    )
}