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
import LoginIcon from "@mui/icons-material/Login";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import ImageArgentina from "../images/argentina.png";
import ImageUsa from "../images/estados-unidos.png";
import ImageBrasil from "../images/brasil.png";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [language, setLanguage] = React.useState(10);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [t, i18n] = useTranslation("global");
  const router = useRouter();

  const handleChange = (event) => {
    if (event.target.value == 10) {
      i18n.changeLanguage("es");
      setLanguage(10);
    } else if (event.target.value == 20) {
      i18n.changeLanguage("en");
      setLanguage(20);
    } else if (event.target.value == 30) {
      i18n.changeLanguage("pt");
      setLanguage(30);
    }
  };

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
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => router.push("/dashboard/destination")}>
              Destinos
            </MenuItem>
            <MenuItem onClick={() => router.push("/dashboard/culture")}>
              Cultura
            </MenuItem>
            <MenuItem onClick={() => router.push("/dashboard/activities")}>
              Actividades
            </MenuItem>
            <MenuItem onClick={() => router.push("/dashboard/ruraltourism")}>
              Turismo rural
            </MenuItem>
            <MenuItem onClick={() => router.push("/dashboard/gastronomy")}>
              Gastronomia
            </MenuItem>
          </Menu>
          <Box>
            <Image
              onClick={() => router.push("/")}
              width={50}
              height={50}
              src={logo}
            />
          </Box>
          <Box sx={{ padding: 1, alignItems: "center" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <span style={{ color: "red" }}>MI</span>
              <span style={{ color: "blue" }}>SI</span>
              <span style={{ color: "white" }}>ON</span> &nbsp;{" "}
              <span style={{ color: "#bbff33" }}>TROPICAL</span>
            </Typography>
          </Box>
          <FormControl
            id="xxxx
          "
            sx={{ paddingLeft: "150px", margin: "9px" }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              label="Lng"
              onChange={handleChange}
            >
              <MenuItem value={10}>
                <Image width={40} src={ImageArgentina} />
              </MenuItem>
              <MenuItem value={20}>
                {<Image width={40} src={ImageUsa} />}
              </MenuItem>
              <MenuItem value={30}>
                {<Image width={40} src={ImageBrasil} />}
              </MenuItem>
            </Select>
          </FormControl>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="outlined" color="inherit">
            {t("home.login")} &nbsp; <LoginIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
