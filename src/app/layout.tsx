/* -------------------------------------------------------------------------- */
/* ------------------------------- app/layout.jsx --------------------------- */
/* -------------------------------------------------------------------------- */
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  CssBaseline,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/config/theme';
import Footer from './components/layout/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar
            position="sticky"
            color="primary"
            sx={{ boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}
          >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <Image
                  src="/Logomark-White.svg"
                  alt="Aviaris Logo"
                  width={50}
                  height={40}
                  style={{ cursor: 'pointer' }}
                />
              </Button>

              <Box>
                <Button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  sx={{ marginRight: 2, color: 'white' }}
                >
                  Home
                </Button>
                <Button
                  onClick={() =>
                    document
                      .getElementById('about')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  sx={{ marginRight: 2, color: 'white' }}
                >
                  About
                </Button>
                <Button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  sx={{ marginRight: 2, color: 'white' }}
                >
                  Contact
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
