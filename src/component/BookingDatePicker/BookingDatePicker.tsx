import React from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';


interface Props{
newValue?:object | undefined;
label:string;
}

const BookingDatePicker = ({
  label= "",
}:Props) => {
    const [value, setValue] = React.useState<any | null>(
        dayjs(),
      );
    
      const handleChange = (newValue: any) => {
        setValue(newValue);
      };
    return ( 
        <LocalizationProvider dateAdapter={AdapterDayjs}>
             <DesktopDatePicker
          label={label}
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
     );
}
 
export default BookingDatePicker;