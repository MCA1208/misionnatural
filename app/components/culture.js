"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation as UseTranslation } from "react-i18next";

function culture() {
  const [t, i18n] = UseTranslation("global");
  return (
    <div>
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
    </div>
  );
}

export default culture;
