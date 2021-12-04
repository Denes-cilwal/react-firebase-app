import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  alignlist:{
    textAlign:"center"
  }
});

export const Todo = (props) => {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.alignlist}>
        <ListItem>
          <ListItemText primary={props.todo} secondary="DummyText" />
        </ListItem>
      </List>
    </div>
  );
}