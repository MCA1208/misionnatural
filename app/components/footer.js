import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Copyright from "./Copyright";
import { useTranslation } from "react-i18next";

function footer() {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <Box
        className="boxstyle"
        sx={{
          my: 4,
          backgroundColor: "#33ecff",
        }}
      >
        <text>
          WhatsApp: +54 9 3764 13-89856 {t("home.phone")}: (0376) 4449999/40
          Email: info@senderotropical.com.ar ombu 1985 – Posadas – Misiones
        </text>
        <Copyright />
      </Box>
    </div>
  );
}

export default footer;
