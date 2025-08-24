"use client";

import { Box, Typography, Container } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";

const Hero = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          py: 8,
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "4rem", fontWeight: 500 }}>
          Вероника
          <br />
          Здорова
        </Typography>

        <Box sx={{ maxWidth: "600px" }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Развиваюсь в сфере дизайна интерфейсов,
            <br />
            несколько лет работала фронтенд-разработчиком.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Помогу построить дизайн интерфейса
            <br />и реализовать его в веб пространстве.
          </Typography>
        </Box>

        <Box sx={{ mt: "auto" }}>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 2, display: "block" }}
          >
            Здесь будет фото
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
            <a
              href="mailto:vzdorova@gmail.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailIcon />
                <Typography variant="body2">vzdorova@gmail.com</Typography>
              </Box>
            </a>
            <a
              href="https://t.me/zdorova_veronika"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <TelegramIcon />
                <Typography variant="body2">@zdorova_veronika</Typography>
              </Box>
            </a>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
