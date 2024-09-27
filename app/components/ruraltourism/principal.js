import React from "react";
import "./styled.css";
import Container from "@mui/material/Container";
import AppBar from "../../components/Appbar";
import Footer from "../../components/footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation as UseTranslation } from "react-i18next";
import YouTube from "react-player/youtube";
function principal() {
  const [t, i18n] = UseTranslation("global");
  return (
    <div>
      <Container maxWidth="lg">
        <AppBar />
        <Box
          sx={{
            my: 4,
            backgroundColor: "#acfe04",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ mb: 2, fontWeight: 600, textAlign: "center" }}
          >
            {t("ruraltourism.title")}
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4,
            backgroundColor: "#33ecff",
          }}
        >
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("ruraltourism.text1")}
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4,
            backgroundColor: "#acfe04",
          }}
        >
          <Typography className="title" sx={{ mb: 2, padding: 1 }}>
            {t("ruraltourism.title2")}
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4,
            backgroundColor: "#33ecff",
          }}
        >
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("ruraltourism.text2")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("ruraltourism.text3")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("ruraltourism.text4")}
          </Typography>
        </Box>
        <div style={{ alignContent: "center" }}>
          <YouTube
            width="100%"
            url="https://www.youtube.com/watch?v=dNt0uR24Pn4&t=4s"
            controls="true"
          />
        </div>
        <Footer />
      </Container>
    </div>
  );
}

export default principal;
