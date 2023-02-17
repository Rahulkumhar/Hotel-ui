import * as React from 'react';
import { TextField } from '@mui/material';
import { ROOM_SIZE } from '../../Constants/AllConstants';

interface Props{
    value?:object | undefined;
    label:string;
    helperText:string;
    }

const DropdownItem = ({
    label= "",
    helperText='',
  }:Props) => {
    return ( 
      <TextField
      id="standard-select-currency-native"
      select
      label={label}
      defaultValue=""
      SelectProps={{
        native: true,
      }}
      helperText={helperText}
      variant="standard"
    >
      {ROOM_SIZE.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
     );
}
 
export default DropdownItem;