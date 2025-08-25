"use client";

import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import { styled } from "@mui/material/styles";

const Hero = () => {
  return (
    <HeroWrapper>
      <MainTitle variant="h1">
        Вероника
        <br />
        Здорова
      </MainTitle>

      <TextContent>
        <Typography variant="body1">
          Развиваюсь в сфере дизайна интерфейсов, три года работала
          фронтенд-разработчиком. Помогу спроектировать дизайн интерфейса
          и&nbsp;реализовать его в веб-пространстве.
        </Typography>

        <ContactsWrapper>
          <ContactLink href="mailto:w.zdorowa@gmail.com">
            <EmailIcon />
            <Typography variant="body2">w.zdorowa@gmail.com</Typography>
          </ContactLink>
          <ContactLink
            href="https://t.me/zdorova_veronika"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon />
            <Typography variant="body2">@zdorova_veronika</Typography>
          </ContactLink>
        </ContactsWrapper>
      </TextContent>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 72px;
`;

const TextContent = styled("div")`
  max-width: 435px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const MainTitle = styled(Typography)`
  font-size: 4.5rem;
  line-height: 1.15;
`;

const ContactsWrapper = styled("div")`
  margin-top: auto;
  display: flex;
  gap: 16px;
`;

const ContactLink = styled("a")`
  color: #4e64d5;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
`;
