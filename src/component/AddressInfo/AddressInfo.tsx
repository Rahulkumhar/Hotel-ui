import { Grid } from "@mui/material";
import React from "react";
import MultiSelect from "../CommonComponents/MultipleSelect/MultiSelect";
import TextFiledItem from "../CommonComponents/TextFiledItem/TextFiledItem";
import { LABEL } from "../Constants/AllConstants";

const AddressInfo = () => {
  return (
    <Grid container>
  <Grid xs={12}>
    <TextFiledItem label={LABEL.STREET_NAME} helperText={""}/>
  </Grid>
  <Grid xs={12}>
    <TextFiledItem label={LABEL.STREET_NUMBER} helperText={""}/>
  </Grid>
  <Grid xs={12}>
    <TextFiledItem label={LABEL.ZIP} helperText={""}/>
  </Grid>
  <Grid xs={12}>
    <TextFiledItem label={LABEL.STREET_NAME} helperText={""}/>
  </Grid>
  <Grid xs={12}>
    <TextFiledItem label={LABEL.CITY} helperText={""}/>
  </Grid>
  <Grid xs={12}>
    <TextFiledItem label={LABEL.STREET_NAME} helperText={""}/>
  </Grid>
  <Grid xs={12}>
    <MultiSelect label={LABEL.EXTRA}/>
  </Grid>
</Grid>
  );
};

export default AddressInfo;
