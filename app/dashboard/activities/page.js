"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import Principal from "../../components/activities/principal";
import global_esp from "../../translations/es/global.json";
import global_eng from "../../translations/en/global.json";
import global_por from "../../translations/pt/global.json";

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
      <Principal />
    </I18nextProvider>
  );
}

export default page;
