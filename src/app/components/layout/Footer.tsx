"use client";

import Link from "next/link";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        px: 2,
        bgcolor: "grey.100",
        borderTop: "1px solid #e0e0e0",
        bottom: 0,
        width: "100%",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
      >
        {/* Left Section - Brand */}
        <Box>
          <Typography variant="h6" fontWeight={600}>
            Aviaris
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Intelligent Scheduling • Precision Productivity
          </Typography>
        </Box>

        {/* Center Links */}
        <Stack spacing={1}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ "&:hover": { color: "text.primary" } }}
            >
              Home
            </Typography>
          </Link>

          <Link href="/mission" style={{ textDecoration: "none" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ "&:hover": { color: "text.primary" } }}
            >
              About
            </Typography>
          </Link>

          <Link href="/contact" style={{ textDecoration: "none" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ "&:hover": { color: "text.primary" } }}
            >
              Contact
            </Typography>
          </Link>
        </Stack>

        {/* Right Section - Legal */}
        <Box>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Aviaris.
            <br />
            All rights reserved.
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ my: 3 }} />

      <Typography
        variant="caption"
        color="text.secondary"
        display="block"
        textAlign="center"
      >
        Built with Next.js & Material UI
      </Typography>
    </Box>
  );
};

export default Footer;