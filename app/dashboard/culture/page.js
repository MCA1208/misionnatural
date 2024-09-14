"use client";
import React from "react";
import Container from "@mui/material/Container";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18next from "i18next";
import AppBar from "../../components/Appbar";
import Footer from "../../components/footer";
import Culture from "../../components/culture";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";

import "../culture.css";

function page() {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <I18nextProvider i18n={i18next}>
        <Container maxWidth="lg">
          <AppBar />
          <Culture />
          <div>
            <ImageList
              sx={{ width: "100%", height: "100%" }}
              cols={3}
              rowHeight={164}
            >
              <ImageListItem>
                <img id="img1" />
              </ImageListItem>
              <ImageListItem>
                <img id="img2" />
              </ImageListItem>
              <ImageListItem>
                <img id="img3" />
              </ImageListItem>
              <ImageListItem>
                <img id="img4" />
              </ImageListItem>
              <ImageListItem>
                <img id="img5" />
              </ImageListItem>
              <ImageListItem>
                <img id="img6" />
              </ImageListItem>
              <ImageListItem>
                <img id="img7" />
              </ImageListItem>
              <ImageListItem>
                <img id="img8" />
              </ImageListItem>
              <ImageListItem>
                <img id="img9" />
              </ImageListItem>
              <ImageListItem>
                <img id="img10" />
              </ImageListItem>
              <ImageListItem>
                <img id="img11" />
              </ImageListItem>
              <ImageListItem>
                <img id="img12" />
              </ImageListItem>
            </ImageList>
          </div>
          <Footer />
        </Container>
      </I18nextProvider>
    </div>
  );
}

const itemData = [
  {
    img: "../../images/culture/mate1.jpg",
    title: "Breakfast",
  },
  // {
  //   img: { mate2Image },
  //   title: "Burger",
  // },
  // {
  //   img: { mate2Image },
  //   title: "Burger",
  // },
];

export default page;
