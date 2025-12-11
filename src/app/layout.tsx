/* -------------------------------------------------------------------------- */
/* ------------------------------- app/layout.jsx --------------------------- */
/* -------------------------------------------------------------------------- */
"use client";


import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";


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
    <Link href="/">
      {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
      }
      <Button component="a" sx={{ marginRight: 2 }}>
      Home
      </Button>
    </Link>


    <Link href="/mission">
      {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
      }
      <Button component="a">Mission & Values</Button>
    </Link>
    </Box>
    </Toolbar>
    </AppBar>


    <main>{children}</main>
    </ThemeProvider>
    </body>
  </html>
);
}