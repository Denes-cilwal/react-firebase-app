import { FormControl, Input, InputLabel } from '@material-ui/core';
import React from 'react'

export const FormComponent = (props) => {

  return (
    <div>
      {/* onchange captures every event trigger */}
      <FormControl>
        <InputLabel> ✔ Write a Todo </InputLabel>
        <Input
          value={props.input}
          onChange={(event) => {
            props.setInput(event.target.value);
          }}
        />
      </FormControl>
    </div>
  )
}