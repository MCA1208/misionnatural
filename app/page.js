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

function Page() {
  return (
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
          Video Principal
        </Typography>
        {/* <Link href="/about" color="secondary" component={NextLink}>
          Go to the about page
        </Link> */}
        {/* <ProTip /> */}
        <Image src={imageYaguar} />
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
        <Image src={imageSelva1} />
        <Image src={imageSelva2} />
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Galeria de Fotos
        </Typography>
      </Box>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#33ecff",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Piede pagina - datos del servicio
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Page;
