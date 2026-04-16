'use client';

import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { theme } from '@/config/theme';
import About from './components/About';
import Contact from './components/Contact';
import Horizon from './components/Horizon';

export default function HomePage() {
  return (
    <main>
      <Container
        sx={{ textAlign: 'center', paddingTop: '6rem', paddingBottom: '6rem' }}
      >
        <Box
          component="img"
          src="/Horizontal Lockups-Black.svg"
          alt="Aviaris Horizontal Logo"
          sx={{ height: '80px', marginBottom: '5rem' }}
        />

        <Typography variant="h5" color="text.secondary" gutterBottom>
          Protect the Operation with unified data and clear, actionable insights
          so every team operates with full context and shared visibility
          ensuring decisions are clear, transparent, and aligned.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() =>
            document
              .getElementById('contact')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          sx={{ mt: 4 }}
        >
          Get in Touch
        </Button>

        {/* Problem statement */}
        <Box
          sx={{
            mt: 12,
            py: 8,
            px: 4,
            borderLeft: `4px solid ${theme.palette.primary.dark}`,
            backgroundColor: theme.palette.primary.light + '40',
            textAlign: 'left',
            maxWidth: '720px',
            mx: 'auto',
            borderRadius: 1,
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.dark,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            The Problem
          </Typography>
          <Typography variant="h4" fontWeight={700} sx={{ mt: 1, mb: 2 }}>
            Business impact based on fragmented data and disconnected decisions
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Critical operational decisions are often made across siloed systems,
            spreadsheets, and isolated teams—without a complete view of the
            Operation. When data is fragmented and communication is
            inconsistent, risks go unseen until it&apos;s too late.
          </Typography>
        </Box>

        {/* Contributing factors */}
        <Box sx={{ mt: 10, maxWidth: '720px', mx: 'auto', textAlign: 'left' }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.dark,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            3 Contributing Factors
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 3 }}>
            {[
              {
                title: 'Fragmented data and workflows',
                body: 'Teams rely on disconnected systems, spreadsheets, and self-built datasets to manage their part of the Operation.',
              },
              {
                title: 'Decisions without full visibility',
                body: 'Without shared context, teams act in isolation—leading to misalignment, missed signals, and limited accountability.',
              },
              {
                title: 'Hidden risks and delayed impact',
                body: 'Manual processes and siloed data allow issues to go unnoticed until they surface as operational disruptions or budget overruns.',
              },
            ].map((factor, i) => (
              <Paper
                key={i}
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 1,
                  borderLeft: `4px solid ${theme.palette.primary.dark}`,
                  backgroundColor: theme.palette.primary.light + '30',
                  display: 'flex',
                  gap: 2,
                  alignItems: 'flex-start',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    minWidth: 24,
                    mt: '2px',
                  }}
                >
                  {i + 1}
                </Typography>
                <Box>
                  <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                    {factor.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {factor.body}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
          <Typography
            variant="body1"
            fontWeight={500}
            sx={{ mt: 4, color: theme.palette.primary.dark }}
          >
            This leads to increased risk to the Operation, inefficient use of
            resources, and decisions made without the full story.
          </Typography>
        </Box>

        {/* Introducing Aviaris */}
        <Paper
          elevation={0}
          sx={{
            mt: 16,
            py: 10,
            px: 6,
            textAlign: 'center',
            maxWidth: '720px',
            mx: 'auto',
            borderRadius: 2,
            border: `1px solid ${theme.palette.primary.main}`,
            backgroundColor: theme.palette.primary.light + '40',
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            Introducing Aviaris
          </Typography>
          <Typography variant="h4" fontWeight={700} sx={{ mt: 1, mb: 3 }}>
            One environment. Full visibility. Every team.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Unify data, workflows, and communication in a single, shared
            environment—giving every team full visibility so issues are
            identified early, coordination improves, and decisions are made
            before problems escalate.
          </Typography>
        </Paper>
        <Horizon />
        <About />
        <Contact />
      </Container>
    </main>
  );
}
