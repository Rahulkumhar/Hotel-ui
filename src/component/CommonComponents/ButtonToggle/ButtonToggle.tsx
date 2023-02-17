import * as React from "react";
import { FormControlLabel, FormGroup, Switch, TextField } from "@mui/material";

interface Props {
  label: string;
}

const ButtonToggle = ({ label = "" }: Props) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label={label} />
    </FormGroup>
  );
};

export default ButtonToggle;
