import { Grid } from "@mui/material";
import React from "react";
import BookingDatePicker from "../BookingDatePicker/BookingDatePicker";
import { LABEL } from "../Constants/AllConstants";

const BookingDates = () => {
  return (
    <Grid container>
  <Grid xs={6}>
    <BookingDatePicker label={LABEL.DATE_OF_ARRIVAL}/>
  </Grid>
  <Grid xs={6}>
    <BookingDatePicker label={LABEL.DATE_OF_DEPARTURE}/>
  </Grid>
</Grid>
  );
};

export default BookingDates;
