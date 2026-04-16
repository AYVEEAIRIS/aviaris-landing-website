'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const values = [
  {
    title: 'Simplicity',
    body: 'Build tools that feel natural and intuitive.',
  },
  {
    title: 'Reliability',
    body: 'Provide fast, stable, and predictable performance.',
  },
  {
    title: 'Transparency',
    body: 'Communicate honestly with customers and partners.',
  },
  {
    title: 'Scalability',
    body: 'Design systems that grow with your organization.',
  },
];

export default function About() {
  return (
    <section id="about">
      <Box sx={{ backgroundColor: '#0f0f0f', color: '#fff', py: 16, px: { xs: 4, md: 12 } }}>
        <Box sx={{ maxWidth: '800px', mb: 12 }}>
          <Typography
            variant="overline"
            sx={{ color: '#666', fontWeight: 700, letterSpacing: 2 }}
          >
            About Aviaris
          </Typography>
          <Typography variant="h3" fontWeight={700} sx={{ mt: 2, lineHeight: 1.25 }}>
            Our mission is to empower operational teams to turn strategy into
            action through a unified platform.
          </Typography>
          <Typography variant="body1" sx={{ mt: 4, color: '#999', maxWidth: '620px' }}>
            We believe that to develop solutions for real world, critical business
            problems that affect day-to-day operations, we must first solve
            communication gaps and disparate data sources. We aim to improve the
            lack of transparency and visibility to reduce human error.
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="overline"
            sx={{ color: '#666', fontWeight: 700, letterSpacing: 2 }}
          >
            Our Values
          </Typography>
          <Grid container spacing={0} sx={{ mt: 4 }}>
            {values.map((value, i) => (
              <Grid key={value.title} size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    py: 4,
                    pr: { sm: 8 },
                    borderTop: '1px solid #222',
                    ...(i < values.length - 2 && { borderBottom: '1px solid #222' }),
                  }}
                >
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#999' }}>
                    {value.body}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </section>
  );
}
