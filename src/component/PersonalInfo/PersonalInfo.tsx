import { Grid } from "@mui/material";
import React from "react";
import BookingDatePicker from "../BookingDatePicker/BookingDatePicker";
import TextFiledItem from "../CommonComponents/TextFiledItem/TextFiledItem";
import { LABEL } from "../Constants/AllConstants";

const PersonalInfo = () => {
  return (
    <Grid container>
  <Grid xs={12}>
    <TextFiledItem label={LABEL.FIRST_NAME} helperText={""}/>
  </Grid>
  <Grid xs={12}>
    <TextFiledItem label={LABEL.LAST_NAME} helperText={""}/>
  </Grid>
  <Grid xs={12}>
    <TextFiledItem label={LABEL.EMAIL} helperText={""}/>
  </Grid>
  <Grid xs={12}>
    <TextFiledItem label={LABEL.PHONE_NUMBER} helperText={""}/>
  </Grid>
</Grid>
  );
};

export default PersonalInfo;
