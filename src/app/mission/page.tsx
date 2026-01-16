/* -------------------------------------------------------------------------- */
/* ----------------------------- app/mission/page.jsx ------------------------ */
/* -------------------------------------------------------------------------- */
'use client';

import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export function MissionPageContent() {
  return (
    <Container sx={{ paddingTop: '4rem' }}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        At Aviaris (AY-vee-AIR-iss), our mission is to empower operational teams
        to turn strategy into action through a unified platform.
      </Typography>

      <Typography variant="body1" sx={{ marginTop: '1rem', maxWidth: '700px' }}>
        We believe that to develop solutions for real world, critical business
        problems that affect day-to-day operations, we must first solve
        communication gaps and disparate data sources. We aim to improve the
        lack of transparency and visibility to reduce human error.
      </Typography>

      <Box sx={{ marginTop: '2rem' }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Our Values
        </Typography>
        <ul>
          <li>
            <strong>Simplicity</strong> — Build tools that feel natural and
            intuitive.
          </li>
          <li>
            <strong>Reliability</strong> — Provide fast, stable, and predictable
            performance.
          </li>
          <li>
            <strong>Transparency</strong> — Communicate honestly with customers
            and partners.
          </li>
          <li>
            <strong>Scalability</strong> — Design systems that grow with your
            organization.
          </li>
        </ul>
      </Box>
    </Container>
  );
}

export default function MissionPage() {
  return <MissionPageContent />;
}
