'use client';

import Image from 'next/image';
import { Typography, Grid } from '@mui/material';
import { FC } from 'react';
import { theme } from '@/config/theme';

const Footer: FC = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        py: 3,
        px: { xs: 3, md: 4 },
        backgroundColor: theme.palette.primary.main,
        borderTop: `3px solid ${theme.palette.primary.light}`,
        width: '100%',
      }}
    >
      <Grid size={{ xs: 12, sm: 6 }}>
        <Image
          src="/Logomark-White.svg"
          alt="Aviaris Logo"
          width={36}
          height={36}
        />
        <Typography
          variant="body2"
          sx={{ mt: 1, color: theme.palette.primary.light }}
        >
          Intelligent Scheduling • Collaborative Communication
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.primary.light,
            textAlign: { xs: 'left', sm: 'right' },
            mt: { xs: 2, sm: 0 },
          }}
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
