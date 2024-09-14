"use client";
import React from "react";
import Container from "@mui/material/Container";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18next from "i18next";
import AppBar from "../../components/Appbar";
import Footer from "../../components/footer";

function page() {
  return (
    <div>
      <I18nextProvider i18n={i18next}>
        <Container maxWidth="lg">
          <AppBar />
          <div style={{ textAlign: "center" }}>
            <h3>Turismo Rural</h3>
            <h3>Page not available</h3>
          </div>

          <Footer />
        </Container>
      </I18nextProvider>
    </div>
  );
}

export default page;
