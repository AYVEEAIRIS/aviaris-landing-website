/* -------------------------------------------------------------------------- */
/* ------------------------------- app/layout.jsx --------------------------- */
/* -------------------------------------------------------------------------- */
"use client";


import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./components/layout/Footer";


const theme = createTheme({
palette: {
primary: {
main: '#1976d2',
},
secondary: {
main: '#f50057',
},
background: {
default: '#ffffff',
},
},
typography: {
fontFamily: 'Roboto, Arial, sans-serif',
},
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
  <html lang="en">
    <head />
    <body>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar
    position="static"
    color="default"
    sx={{ boxShadow: "none", borderBottom: "1px solid #e0e0e0" }}
    >
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    <Typography variant="h6" sx={{ fontWeight: 700 }}>
    Aviaris
    </Typography>


    <Box>
    <Button component={Link} href="/" sx={{ marginRight: 2 }}>
      Home
    </Button>
    <Button component={Link} href="/mission">
      About Us
    </Button>
    </Box>
    </Toolbar>
    </AppBar>

    <main>{children}</main>
    <Footer />
    </ThemeProvider>
    </body>
  </html>
);
}