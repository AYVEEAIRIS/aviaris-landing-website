/* -------------------------------------------------------------------------- */
/* ----------------------------- app/mission/page.jsx ------------------------ */
/* -------------------------------------------------------------------------- */
"use client";


import React from "react";
import { Container, Typography, Box } from "@mui/material";


export function MissionPageContent() {
return (
<Container sx={{ paddingTop: "4rem" }}>
<Typography variant="h3" fontWeight={700} gutterBottom>
Our Mission & Values
</Typography>


<Typography variant="body1" sx={{ marginTop: "1rem", maxWidth: "700px" }}>
At Aviaris, our mission is to empower organizations with intuitive, high-performance scheduling tools
that streamline operations and unlock new efficiencies. We believe that technology should stay out of
your way while elevating your team's abilities.
</Typography>


<Box sx={{ marginTop: "2rem" }}>
<Typography variant="h5" fontWeight={600} gutterBottom>
Our Values
</Typography>
<ul>
<li><strong>Simplicity</strong> — Build tools that feel natural and intuitive.</li>
<li><strong>Reliability</strong> — Provide fast, stable, and predictable performance.</li>
<li><strong>Transparency</strong> — Communicate honestly with customers and partners.</li>
<li><strong>Scalability</strong> — Design systems that grow with your organization.</li>
</ul>
</Box>
</Container>
);
}


export default function MissionPage() {
return <MissionPageContent />;
}