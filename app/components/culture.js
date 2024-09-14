"use client";
import React from "react";
import "../dashboard/culture.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppBar from "../components/Appbar";
import Footer from "../components/footer";
import Typography from "@mui/material/Typography";
import { useTranslation as UseTranslation } from "react-i18next";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function culture() {
  const [t, i18n] = UseTranslation("global");
  return (
    <div>
      <Container maxWidth="lg">
        <AppBar />
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
    </div>
  );
}

export default culture;
