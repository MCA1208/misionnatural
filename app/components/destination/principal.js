import React from "react";
import "../styledGeneric/styled.css";
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
            backgroundColor: "#acfe04",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ mb: 2, fontWeight: 600, textAlign: "center" }}
          >
            {t("destination.title")}
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4,
            backgroundColor: "#33ecff",
          }}
        >
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.text1")}
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4,
            backgroundColor: "#acfe04",
          }}
        >
          <Typography className="title" sx={{ mb: 2, padding: 1 }}>
            {t("destination.iguazu")}
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4,
            backgroundColor: "#33ecff",
          }}
        >
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
            {t("destination.title6")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.text7")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.text8")}
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
        <Box
          sx={{
            my: 4,
            backgroundColor: "#acfe04",
          }}
        >
          <Typography className="title" sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanIgnacio.title")}
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4,
            backgroundColor: "#33ecff",
          }}
        >
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanIgnacio.text1")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanIgnacio.title1")}
          </Typography>
          <Typography className="title" sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanIgnacio.title2")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanIgnacio.text3")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanIgnacio.text2")}
          </Typography>

          <Typography className="title" sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanIgnacio.title3")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanIgnacio.text4")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanIgnacio.text5")}
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4,
            backgroundColor: "#acfe04",
          }}
        >
          <Typography className="title" sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanJavier.title")}
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4,
            backgroundColor: "#33ecff",
          }}
        ></Box>

        <Box
          sx={{
            my: 4,
            backgroundColor: "#33ecff",
          }}
        >
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanJavier.text1")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanJavier.title1")}
          </Typography>
          <Typography className="title" sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanJavier.title2")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanJavier.text2")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanJavier.text4")}
          </Typography>

          <Typography className="title" sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanJavier.title3")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanJavier.text5")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanJavier.text6")}
          </Typography>
          <Typography className="title" sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanJavier.title4")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanJavier.text7")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanJavier.text8")}
          </Typography>
          <Typography className="title" sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanJavier.title5")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanJavier.text9")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanJavier.text10")}
          </Typography>
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("destination.sanJavier.text11")}
          </Typography>
        </Box>

        <Footer />
      </Container>
    </div>
  );
}

export default principal;
