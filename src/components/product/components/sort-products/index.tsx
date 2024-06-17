import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function SortProduct() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            sx={{ border: "solid 1px black", color: "black" }}
            {...bindTrigger(popupState)}
          >
            Sort by: featured
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Price: ascending </MenuItem>
            <MenuItem onClick={popupState.close}>Price: descending </MenuItem>
            <MenuItem onClick={popupState.close}>New Arrivals</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
