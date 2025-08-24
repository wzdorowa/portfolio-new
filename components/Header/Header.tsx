"use client";

import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link
            href="#about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="body1">Обо мне</Typography>
          </Link>
          <Link
            href="#skills"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="body1">Что умею</Typography>
          </Link>
          <Link
            href="#education"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="body1">Где училась</Typography>
          </Link>
          <Link
            href="#experience"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="body1">Где работала</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
