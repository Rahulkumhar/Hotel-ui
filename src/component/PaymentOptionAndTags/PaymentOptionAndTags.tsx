import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import React from "react";
import ButtonToggle from "../CommonComponents/ButtonToggle/ButtonToggle";
import RadioInput from "../CommonComponents/RadioInput/RadioInput";
import TagChips from "../CommonComponents/TagChips/TagChips";
import { LABEL } from "../Constants/AllConstants";

const PaymentOptionAndTags = () => {
  return (
    <Grid container>
  <Grid xs={12}>
    <RadioInput />
  </Grid>
  <Grid xs={12}>
    <TagChips />
  </Grid>
  <Grid xs={12}>
    <ButtonToggle label={LABEL.SEND_ME_A_REMINDER} />
  </Grid>
  <Grid xs={12}>
    <ButtonToggle label={LABEL.SUBSCRIBE_TO_NEWSLETTER} />
  </Grid>
  <Grid xs={12}>
  <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label={LABEL.I_CONFIRM_THE_INFORMATION_GIVEN_ABOVE} />
</FormGroup>
  </Grid>
</Grid>
  );
};

export default PaymentOptionAndTags;
