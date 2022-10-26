import React, { useContext } from "react";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import userimg from "../../../assets/images/users/user2.jpg";
import {
  Box,
  Menu,
  Typography,
  ListItemButton,
  List,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";
import { AdminContext } from "../../../store/AdminState";
import Link from "next/link";

const ProfileDD = () => {
  const adminCtx = useContext(AdminContext);
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  return (
    <>
      {adminCtx && adminCtx.isLoggedIn ? (
        <>
          <Button
            aria-label="menu"
            color="inherit"
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleClick4}
          >
            <Box display="flex" alignItems="center">
              <Image
                src={userimg}
                alt={userimg}
                width="30"
                height="30"
                className="roundedCircle"
              />
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                  alignItems: "center",
                }}
              >
                <Typography
                  color="textSecondary"
                  variant="h5"
                  fontWeight="400"
                  sx={{ ml: 1 }}
                >
                  Hi,
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="700"
                  sx={{
                    ml: 1,
                  }}
                >
                  {adminCtx && adminCtx.admin.name}
                </Typography>
                <FeatherIcon icon="chevron-down" width="20" height="20" />
              </Box>
            </Box>
          </Button>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl4}
            keepMounted
            open={Boolean(anchorEl4)}
            onClose={handleClose4}
            sx={{
              "& .MuiMenu-paper": {
                width: "385px",
              },
            }}
          >
            <Box>
              <Box p={2} pt={0}>
                <List
                  component="nav"
                  aria-label="secondary mailbox folder"
                  onClick={handleClose4}
                >
                  <ListItemButton>
                    <ListItemText primary="Edit Profile" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Account" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Change Password" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="My Settings" />
                  </ListItemButton>
                </List>
              </Box>
              <Divider />
              <Box p={2}>
                <button
                  className="w-full h-11 bg-cust_green disabled:bg-emerald-200 my-3 text-cust_white font-semibold flex justify-center items-center"
                  onClick={() => adminCtx.logout()}
                >
                  Logout
                </button>
              </Box>
            </Box>
          </Menu>
        </>
      ) : (
        <>
          <Link href="/admin/login">Login</Link>
        </>
      )}
    </>
  );
};

export default ProfileDD;
