import * as React from 'react';
import { TextField } from '@mui/material';

interface Props{
    newValue?:object | undefined;
    label:string;
    helperText:string;
    }

const TextFiledItem = ({
    label= "",
    helperText="",
  }:Props) => {
    return ( 
      <TextField
          required
          id="standard-required"
          label={label}
          defaultValue=""
          variant="standard"
          helperText={helperText}
        />
     );
}
 
export default TextFiledItem;