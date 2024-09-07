"use client";
// import React, { useEffect, useState } from "react";
// import "./globals.css";
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
// import Copyright from "@/components/Copyright";
import ProTip from "./components/ProTip";
import Copyright from "./components/Copyright";
import AppBar from "./components/Appbar";
import imageYaguar from "./images/yaguarete.jpg";
import imageSelva1 from "./images/selva1.jpg";
import imageSelva2 from "./images/selva2.jpg";
import Image from "next/image";
import { Repeat } from "@mui/icons-material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ReactPlayer from "react-player/youtube";
//import "./globals.css";

function Page() {
  return (
    <body>
      <Container maxWidth="lg">
        <AppBar />
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#33ecff",
          }}
        >
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Lugares en Misiones
          </Typography>

          <ReactPlayer url="https://www.youtube.com/watch?v=XbGy99E0Cpw" />
          <br />
        </Box>
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#33ecff",
          }}
        >
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Galeria de fotos
          </Typography>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
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
        </Box>
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#33ecff",
          }}
        >
          <text>
            WhatsApp: +54 9 3764 13-89856 Teléfono: (0376) 4449999/40 Email:
            infog@senderotropical.com.ar ombu 1985 – Posadas – Misiones
          </text>
          <Copyright />
        </Box>
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
export default Page;
