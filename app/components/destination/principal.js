import React from "react";
import "./styled.css";
import Container from "@mui/material/Container";
import AppBar from "../../components/Appbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Footer from "../../components/footer";
import { useTranslation as UseTranslation } from "react-i18next";
function principal() {
  const [t, i18n] = UseTranslation("global");
  return (
    <div>
      <Container maxWidth="lg">
        <AppBar />
        <Box
          sx={{
            my: 4,
            backgroundColor: "#33ecff",
          }}
        >
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.text1")}
          </Typography>
          <Typography className="title" sx={{ mb: 2, padding: 1 }}>
            {t("destination.title1")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.text2")}
          </Typography>
          <Typography className="title" sx={{ mb: 2, padding: 1 }}>
            {t("destination.title2")}
          </Typography>
          <Typography className="title" sx={{ mb: 2, padding: 1 }}>
            {t("destination.title3")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.text3")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.text4")}
          </Typography>
          <Typography className="title" sx={{ mb: 2, padding: 1 }}>
            {t("destination.title4")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.text5")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.text6")}
          </Typography>
        </Box>

        <Footer />
      </Container>
    </div>
  );
}

export default principal;
