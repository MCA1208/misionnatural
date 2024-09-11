"use client";
import Image from "next/image";
import * as React from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_esp from "./translations/es/global.json";
import global_eng from "./translations/en/global.json";
import global_por from "./translations/pt/global.json";
import Home from "./components/Home";

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

function Page() {
  return (
    <div>
      <I18nextProvider i18n={i18next}>
        <Home />
      </I18nextProvider>
    </div>
  );
}

export default Page;
