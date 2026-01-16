'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography, Stack, Divider, Grid } from '@mui/material';
import { FC } from 'react';
import { theme } from '@/config/theme';

const Footer: FC = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        mt: 4,
        py: 2,
        px: 2,
        bgcolor: theme.palette.secondary.main,
        borderTop: `5px solid ${theme.palette.primary.main}`,
        bottom: 0,
        width: '100%',
      }}
    >
      <Grid size={6}>
        {/* Left Section - Brand */}
        <Image
          src="/Horizontal Lockups-Black.svg"
          alt="Aviaris Horizontal Logo"
          width={200}
          height={30}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Intelligent Scheduling • Collaborative Communication
        </Typography>
      </Grid>
      <Grid size={6}>
        {/* Right Section - Legal */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ position: 'relative', textAlign: 'right', bottom: 0 }}
        >
          © {new Date().getFullYear()} Aviaris, Inc.
          <br />
          All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
