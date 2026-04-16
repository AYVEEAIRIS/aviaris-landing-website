'use client';
import { Box, Typography, Paper } from '@mui/material';
import { theme } from '@/config/theme';

export default function Horizon() {
  return (
    <Box
      id="horizon"
      sx={{
        mt: 16,
        py: 12,
        px: 4,
        backgroundColor: theme.palette.primary.light,
        borderRadius: 2,
      }}
    >
      <Box sx={{ maxWidth: '720px', mx: 'auto', textAlign: 'center', mb: 8 }}>
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
        <Typography variant="h4" fontWeight={700} sx={{ mt: 1, mb: 3 }}>
          A unified system for heavy maintenance planning and execution
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Designed for the complexity of aircraft heavy maintenance, Horizon
          brings planning, scheduling, and execution into a single, unified
          environment. From check requirements and package builds to budget
          alignment and schedule optimization, teams gain a complete view of
          upcoming maintenance events—enabling smarter planning, earlier risk
          identification, and more efficient use of resources.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 4,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {[
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
        ].map((feature) => (
          <Paper
            key={feature.title}
            elevation={0}
            sx={{
              p: 5,
              borderRadius: 2,
              width: 240,
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
        ))}
      </Box>
    </Box>
  );
}
