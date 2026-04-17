'use client';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { theme } from '@/config/theme';

const features = [
  {
    title: 'End-to-End Planning',
    body: 'Manage check requirements, package builds, and long-range maintenance plans in one place.',
  },
  {
    title: 'Schedule & Yield Optimization',
    body: 'Align maintenance schedules with operational priorities, green time, and aircraft utilization.',
  },
  {
    title: 'Execution Visibility',
    body: 'Track daily status, parts and tooling risks, and other check performance indicators in a centralized workspace.',
  },
  {
    title: 'Performance & Cost Control',
    body: 'Monitor MRO performance and maintenance spend against plan.',
  },
];

export default function Horizon() {
  return (
    <Box
      id="horizon"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 6, md: 12 },
        backgroundColor: theme.palette.primary.light,
      }}
    >
      <Box
        sx={{
          maxWidth: '720px',
          mx: 'auto',
          textAlign: 'center',
          mb: { xs: 5, md: 8 },
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
          Introducing Horizon
        </Typography>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ mt: 1, mb: 3, fontSize: { xs: '1.4rem', md: '2.125rem' } }}
        >
          A unified system for heavy maintenance planning and execution
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: { xs: 'left', md: 'justify' } }}>
          Designed for the complexity of aircraft heavy maintenance, Horizon
          brings planning, scheduling, and execution into a single, unified
          environment. From check requirements and package builds to budget
          alignment and schedule optimization, teams gain a complete view of
          upcoming maintenance events—enabling smarter planning, earlier risk
          identification, and more efficient use of resources.
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {features.map((feature) => (
          <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                height: '100%',
                backgroundColor: '#fff',
                border: `1px solid ${theme.palette.primary.light}`,
              }}
            >
              <Typography variant="h6" fontWeight={700} gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.body}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
