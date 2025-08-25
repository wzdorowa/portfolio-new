"use client";

import { FC } from "react";
import { styled } from "@mui/material/styles";
import Overview from "../src/components/Overview/Overview";

/**
 * Главная страница приложения
 * Отображает основной контент сайта
 */
const Home: FC = () => {
  return (
    <MainWrapper>
      <Overview />
    </MainWrapper>
  );
};

const MainWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default Home;
