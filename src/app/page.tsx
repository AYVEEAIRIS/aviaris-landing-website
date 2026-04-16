'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
import { theme } from '@/config/theme';
import About from './components/About';
import Contact from './components/Contact';

export default function HomePage() {
  return (
    <main>
      <Container sx={{ textAlign: 'center', paddingTop: '4rem' }}>
        <Box
          component="img"
          src="/Horizontal Lockups-Black.svg"
          alt="Aviaris Horizontal Logo"
          sx={{ height: '80px', marginBottom: '4rem' }}
        />

        <Typography variant="h5" color="text.secondary" gutterBottom>
          Protect the Operation with unified data and clear, actionable insights
          so every team operates with full context and shared visibility
          ensuring decisions are clear, transparent, and aligned.
        </Typography>

        <Box
          sx={{
            mt: 8,
            py: 8,
            px: 4,
            borderLeft: `4px solid ${theme.palette.error.main}`,
            backgroundColor: theme.palette.grey[100],
            textAlign: 'left',
            maxWidth: '720px',
            mx: 'auto',
            borderRadius: 1,
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.error.main,
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

        <Box sx={{ mt: 6, maxWidth: '720px', mx: 'auto', textAlign: 'left' }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.error.main,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            3 Contributing Factors
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mt: 2,
            }}
          >
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
                  p: 3,
                  borderRadius: 1,
                  borderLeft: `4px solid ${theme.palette.error.main}`,
                  backgroundColor: theme.palette.grey[50],
                  display: 'flex',
                  gap: 2,
                  alignItems: 'flex-start',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.error.main,
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
            sx={{ mt: 3, color: theme.palette.error.main }}
          >
            This leads to increased risk to the Operation, inefficient use of
            resources, and decisions made without the full story.
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            mt: 12,
            py: 8,
            px: 6,
            textAlign: 'center',
            maxWidth: '720px',
            mx: 'auto',
            borderRadius: 2,
            border: `1px solid ${theme.palette.primary.main}`,
            backgroundColor: theme.palette.primary.main + '0D',
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
          <Typography variant="h4" fontWeight={700} sx={{ mt: 1, mb: 2 }}>
            One environment. Full visibility. Every team.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Unify data, workflows, and communication in a single, shared
            environment—giving every team full visibility so issues are
            identified early, coordination improves, and decisions are made
            before problems escalate.
          </Typography>
        </Paper>

        <Box
          sx={{ mt: 12, py: 8, backgroundColor: theme.palette.secondary.main }}
        >
          <Typography variant="h4" fontWeight={700} align="center" gutterBottom>
            Key Features
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              mt: 3,
              flexWrap: 'wrap',
            }}
          >
            <Paper elevation={2} sx={{ p: 4, borderRadius: 2, width: 260 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Timeline Scheduling
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Visualize tasks on a horizontal timeline with stackable rows.
              </Typography>
            </Paper>

            <Paper elevation={2} sx={{ p: 4, borderRadius: 2, width: 260 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Forecasting Model
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Create scheduling forecasts in the future with predictive
                algorithms.
              </Typography>
            </Paper>

            <Paper elevation={2} sx={{ p: 4, borderRadius: 2, width: 260 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Communication Hub
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Centralize team communication from top to bottom.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
      <About />
      <Contact />
    </main>
  );
}
