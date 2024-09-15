import React from "react";
import Container from "@mui/material/Container";
import AppBar from "../../components/Appbar";
import Footer from "../../components/footer";
import { useTranslation as UseTranslation } from "react-i18next";
function principal() {
  const [t, i18n] = UseTranslation("global");
  return (
    <div>
      <Container maxWidth="lg">
        <AppBar />
        <div style={{ textAlign: "center" }}>
          <h3>{t("gastronomy.name")}</h3>
          <h3>{t("error.notfound")}</h3>
        </div>
        <Footer />
      </Container>
    </div>
  );
}

export default principal;
