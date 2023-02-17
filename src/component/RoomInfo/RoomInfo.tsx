import React from "react";
import { Grid } from "@mui/material";
import TextFiledItem from "../CommonComponents/TextFiledItem/TextFiledItem";
import DropdownItem from "../CommonComponents/DropdownItem/DropdownItem";
import { HELPER_TEXT, LABEL } from "../Constants/AllConstants";

interface Props {
  newValue?: object | undefined;
  label: string;
}

const RoomInfo = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <DropdownItem
          label={LABEL.ROOM_SIZE}
          helperText={HELPER_TEXT.CHOOSE_A_ROOM_TYPE}
        />
      </Grid>
      <Grid item xs={6}>
        <TextFiledItem label={LABEL.ROOM_QUANTIY} helperText={""} />
      </Grid>
    </Grid>
  );
};

export default RoomInfo;
