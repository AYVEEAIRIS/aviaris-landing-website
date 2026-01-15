/* -------------------------------------------------------------------------- */
/* -------------------------------- app/page.jsx ---------------------------- */
/* -------------------------------------------------------------------------- */
"use client";


import React from "react";
import { Container, Typography, Box, Button, Paper } from "@mui/material";
import { theme } from "@/config/theme";


export default function HomePage() {
return (
<Container sx={{ textAlign: "center", paddingTop: "4rem" }}>
<Typography variant="h2" fontWeight={700} gutterBottom>
Horizon
</Typography>


<Typography variant="h5" color="text.secondary" gutterBottom>
Scheduling Intelligence for Modern Operations
</Typography>


<Typography variant="body1" sx={{ maxWidth: "600px", margin: "0 auto", marginTop: "1rem" }}>
Powerful scheduling, resource management, and timeline visualization to help your business operate
smarter. Built with reliability, scalability, and simplicity in mind.
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
Real-Time Collaboration
</Typography>
<Typography variant="body2" color="text.secondary">
Manage scheduling changes instantly across your team.
</Typography>
</Paper>


<Paper elevation={2} sx={{ p: 4, borderRadius: 2, width: 260 }}>
<Typography variant="h6" fontWeight={700} gutterBottom>
SaaS-Ready Architecture
</Typography>
<Typography variant="body2" color="text.secondary">
Built for scalability, multi-tenancy, and enterprise growth.
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
<Button variant="contained" size="large">Sign Up</Button>
</Box>
</Container>
</Container>
);
}