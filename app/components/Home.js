"use client";
// import React, { useEffect, useState } from "react";
import "../globals.css";
// import Swal from "sweetalert2";
// import { useRouter } from "next/navigation";
// import { CircularProgress, Backdrop } from "@mui/material";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
// import ProTip from "@/components/ProTip";
import Copyright from "./Copyright";

import AppBar from "./Appbar";
import imageYaguar from "../images/yaguarete.jpg";
import imageSelva1 from "../images/selva1.jpg";
import imageSelva2 from "../images/selva2.jpg";
import Image from "next/image";
import { Repeat } from "@mui/icons-material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ReactPlayer from "react-player/youtube";
import { useTranslation as UseTranslation } from "react-i18next";
// import i18next from "i18next";
import Footer from "./footer";

const imgx = require.context("../images", true);

function Home() {
  const [t, i18n] = UseTranslation("global");
  return (
    <body>
      <Container maxWidth="lg">
        <AppBar />
        {/* <Image src={imageYaguar} /> */}
        <Box
          className="backimage"
          sx={{
            my: 4,
          }}
        >
          <Typography
            className="white-with-blue-shadow"
            variant="h4"
            component="h1"
            sx={{ mb: 2 }}
          >
            {t("home.intro")}
          </Typography>
        </Box>
        <Box
          className="boxstyle"
          sx={{
            my: 4,
            backgroundColor: "#33ecff",
          }}
        >
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            {t("home.titleVideo")}
          </Typography>
        </Box>
        <div className="contenedor">
          <ReactPlayer
            height="100%"
            width="100%"
            className="react-player"
            url="https://www.youtube.com/watch?v=XbGy99E0Cpw"
          />
        </div>
        <Box
          className="boxstyle"
          sx={{
            my: 4,
            backgroundColor: "#33ecff",
          }}
        >
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            {t("home.titlePhotos")}
          </Typography>
        </Box>
        <div>
          <ImageList
            sx={{ width: "100%", height: "100%" }}
            cols={3}
            rowHeight={164}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <Footer />
      </Container>
    </body>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
export default Home;
