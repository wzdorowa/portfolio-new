"use client";

import { FC } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles";

/**
 * Компонент заголовка
 * Отображает навигационное меню в верхней части страницы
 */
const Header: FC = () => {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar>
        <HeaderContainer>
          <Navigation>
            <NavigationLink href="/">
              <Typography variant="body1">Обо мне</Typography>
            </NavigationLink>
            <NavigationLink href="#skills">
              <Typography variant="body1">Что умею</Typography>
            </NavigationLink>
            <NavigationLink href="#education">
              <Typography variant="body1">Где училась</Typography>
            </NavigationLink>
            <NavigationLink href="#experience">
              <Typography variant="body1">Где работала</Typography>
            </NavigationLink>
          </Navigation>
        </HeaderContainer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const HeaderContainer = styled("div")`
  display: flex;
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

const Navigation = styled("nav")`
  display: flex;
  gap: 24px;
`;
