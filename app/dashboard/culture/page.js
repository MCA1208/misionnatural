"use client";
import React from "react";
import Container from "@mui/material/Container";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_esp from "../../translations/es/global.json";
import global_eng from "../../translations/en/global.json";
import global_por from "../../translations/pt/global.json";
import AppBar from "../../components/Appbar";
import Footer from "../../components/footer";
import Culture from "../../components/culture";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";

import "../culture.css";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_esp,
    },
    en: {
      global: global_eng,
    },
    pt: {
      global: global_por,
    },
  },
});

function page() {
  return (
    <I18nextProvider i18n={i18next}>
      <Culture />
    </I18nextProvider>
  );
}

export default page;
