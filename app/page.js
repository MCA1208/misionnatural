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

function Page() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js App Router example in JavaScript
        </Typography>
        <Link href="/about" color="secondary" component={NextLink}>
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default Page;
