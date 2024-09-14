"use client";
import React from "react";
import Container from "@mui/material/Container";

import AppBar from "../../components/Appbar";
import Footer from "../../components/footer";

function page() {
  return (
    <div>
      <Container maxWidth="lg">
        <AppBar />
        <div style={{ textAlign: "center" }}>
          <h3>Destinos</h3>
          <h3>Page not available</h3>
        </div>

        <Footer />
      </Container>
    </div>
  );
}

export default page;
