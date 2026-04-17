/* -------------------------------------------------------------------------- */
/* ------------------------------- app/layout.jsx --------------------------- */
/* -------------------------------------------------------------------------- */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/config/theme';
import Footer from './components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const navLinks = [
  { label: 'Home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
  { label: 'Products', onClick: () => document.getElementById('horizon')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'About', onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Contact', onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/Logomark-Black.svg" />
      </head>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar
            position="sticky"
            color="primary"
            sx={{ boxShadow: 'none' }}
          >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Image
                  src="/Logomark-White.svg"
                  alt="Aviaris Logo"
                  width={50}
                  height={40}
                  style={{ cursor: 'pointer' }}
                />
              </Button>

              {isMobile ? (
                <>
                  <IconButton
                    onClick={() => setDrawerOpen(true)}
                    sx={{ color: 'white' }}
                    aria-label="Open navigation menu"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <rect y="4" width="24" height="2" rx="1" />
                      <rect y="11" width="24" height="2" rx="1" />
                      <rect y="18" width="24" height="2" rx="1" />
                    </svg>
                  </IconButton>
                  <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                  >
                    <Box sx={{ width: 220, pt: 2 }}>
                      <List>
                        {navLinks.map((link) => (
                          <ListItem key={link.label} disablePadding>
                            <ListItemButton
                              onClick={() => {
                                link.onClick();
                                setDrawerOpen(false);
                              }}
                            >
                              <ListItemText primary={link.label} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Drawer>
                </>
              ) : (
                <Box>
                  {navLinks.map((link) => (
                    <Button
                      key={link.label}
                      onClick={link.onClick}
                      sx={{ marginRight: 2, color: 'white' }}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Box>
              )}
            </Toolbar>
          </AppBar>

          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
