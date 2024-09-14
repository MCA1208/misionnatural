"use client";
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppBar from "../components/Appbar";
import Footer from "../components/footer";
import Typography from "@mui/material/Typography";
import { useTranslation as UseTranslation } from "react-i18next";

function culture() {
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
          {/* <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          {t("culture.description")}
        </Typography> */}
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("culture.description")}
          </Typography>
        </Box>
        <Footer />
      </Container>
    </div>
  );
}

export default culture;
