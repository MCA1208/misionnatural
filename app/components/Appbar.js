import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import logo from "../images/logo.png";
import name from "../images/senderotropical.png";
import LoginIcon from "@mui/icons-material/Login";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Image width={50} height={50} src={logo} />
          </Box>
          <Box sx={{ padding: 1 }}>
            {" "}
            <Image src={name} />{" "}
          </Box>

          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          <Button variant="outlined" color="inherit">
            Ingresar <LoginIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
