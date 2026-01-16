/* -------------------------------------------------------------------------- */
/* -------------------------------- app/page.jsx ---------------------------- */
/* -------------------------------------------------------------------------- */
"use client";


import React from "react";
import Link from "next/link";
import { Container, Typography, Box, Button, Paper } from "@mui/material";
import { theme } from "@/config/theme";


export default function HomePage() {
return (
<Container sx={{ textAlign: "center", paddingTop: "4rem" }}>
<Typography variant="h2" fontWeight={700} gutterBottom>
Horizon
</Typography>


<Typography variant="h5" color="text.secondary" gutterBottom>
Aviation-based Software for Supporting Operational Teams
</Typography>


<Typography variant="body1" sx={{ maxWidth: "600px", margin: "0 auto", marginTop: "1rem" }}>
Centralized scheduling and communication platform for Heavy Maintenance built by individuals with 40+ years of aviation experience.
</Typography>

<Box sx={{ mt: 8 }}>
<Paper elevation={3} sx={{ height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>
<Typography variant="body1" color="text.secondary">
Placeholder for Product Screenshot
</Typography>
</Paper>
</Box>


<Box sx={{ mt: 12, py: 8, backgroundColor: theme.palette.secondary.main }}>
<Typography variant="h4" fontWeight={700} align="center" gutterBottom>
Key Features
</Typography>


<Box sx={{ display: "flex", gap: 3, justifyContent: "center", mt: 3, flexWrap: "wrap" }}>
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
Create scheduling forecasts in the future with predictive algorithms.
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


<Container sx={{ my: 10 }}>
<Typography variant="h4" fontWeight={700} align="center" gutterBottom>
Join Aviaris's Horizon Waitlist
</Typography>
<Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 3 }}>
Be the first to try our scheduling platform.
</Typography>
<Box display="flex" justifyContent="center">
<Button component={Link} href="/contact"variant="contained" size="large">Sign Up</Button>
</Box>
</Container>
</Container>
);
}