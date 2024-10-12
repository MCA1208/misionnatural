import React from "react";
import "../styledGeneric/styled.css";
import "./image.css";
import Container from "@mui/material/Container";
import AppBar from "../../components/Appbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Footer from "../../components/footer";
import { useTranslation as UseTranslation } from "react-i18next";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import imageArtistic from "../../images/artistic/dibujo12.jpeg";
import image1 from "../../images/artistic/dibujo1.jpeg";
import image2 from "../../images/artistic/dibujo2.jpeg";
import image3 from "../../images/artistic/dibujo3.jpeg";
import image4 from "../../images/artistic/dibujo4.jpeg";
import image5 from "../../images/artistic/dibujo5.jpeg";
import image6 from "../../images/artistic/dibujo6.jpeg";
import image7 from "../../images/artistic/dibujo7.jpeg";
import image8 from "../../images/artistic/dibujo8.jpeg";
import image9 from "../../images/artistic/dibujo9.jpeg";
import image10 from "../../images/artistic/dibujo10.jpeg";
import image11 from "../../images/artistic/dibujo11.jpeg";
import image12 from "../../images/artistic/dibujo12.jpeg";
function principal() {
  const [t, i18n] = UseTranslation("global");
  return (
    <div>
      <Container maxWidth="lg">
        <AppBar />
        <Box
          sx={{
            my: 4,
            backgroundColor: "#acfe04",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ mb: 2, fontWeight: 600, textAlign: "center" }}
          >
            {t("artistic.title1")}
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4,
            backgroundColor: "#33ecff",
          }}
        >
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("artistic.text1")}
          </Typography>
        </Box>
        <div style={{ textAlign: "center" }}>
          <Image src={imageArtistic} />
          <Image src={image1} />
          <Image src={image2} />
          <Image src={image3} />
          <Image src={image4} />
          <Image src={image7} />
        </div>

        <Box
          sx={{
            my: 4,
            backgroundColor: "#acfe04",
          }}
        >
          <Typography className="title" sx={{ mb: 2, padding: 1 }}>
            {t("artistic.title1")}
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4,
            backgroundColor: "#33ecff",
          }}
        >
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("artistic.text1")}
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4,
            backgroundColor: "#acfe04",
          }}
        >
          <Typography className="title" sx={{ mb: 2, padding: 1 }}>
            {t("artistic.title2")}
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4,
            backgroundColor: "#33ecff",
          }}
        >
          <Typography sx={{ mb: 2, padding: 1 }}>
            {t("artistic.text2")}
          </Typography>
        </Box>
        <div style={{ textAlign: "center" }}>
          <Image src={image5} />
          <Image src={image6} />
          <Image src={image8} />
          <Image src={image9} />
          <Image src={image10} />
          <Image src={image11} />
        </div>

        <Footer />
      </Container>
    </div>
  );
}

export default principal;
