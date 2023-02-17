import * as React from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { LABEL, PAYMENT_OPTION } from '../../Constants/AllConstants';

const RadioInput = () => {
    return ( 
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value={PAYMENT_OPTION.CREDIT_CARD} control={<Radio />} label={PAYMENT_OPTION.CREDIT_CARD} />
        <FormControlLabel value={PAYMENT_OPTION.PAYPAL} control={<Radio />} label={PAYMENT_OPTION.PAYPAL} />
        <FormControlLabel value={PAYMENT_OPTION.CASH} control={<Radio />} label={PAYMENT_OPTION.CASH} />
        <FormControlLabel value={PAYMENT_OPTION.BITCOIN} control={<Radio />} label={PAYMENT_OPTION.BITCOIN} />
      </RadioGroup>
     );
}
 
export default RadioInput;