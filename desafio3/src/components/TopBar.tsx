import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { authContext } from "../context/auth.context";

const TopBar = () => {
  const auth = React.useContext(authContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex surface-100  justify-content-end align-items-center">
      <h1 className="flex-1 text-center">React Expenses</h1>
      <IconButton onClick={handleClick}>
        <Avatar />
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {auth?.user && (
          <div className="text-center p-2">
            <p className="my-2">{auth.user.nome}</p>
            <p>{auth.user.email}</p>
          </div>
        )}
        <MenuItem sx={{justifyContent: 'center'}} onClick={auth?.signOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default TopBar;
