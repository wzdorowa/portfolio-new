"use client";

import { FC } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

/**
 * Компонент обзорной секции
 * Отображает главную секцию с заголовком, навигацией и фотографией
 */
const Overview: FC = () => {
  return (
    <OverviewWrapper>
      <ContentColumn>
        <Header />
        <Hero
          title={
            <>
              Вероника
              <br />
              Здорова
            </>
          }
          withBackButton
          text="Развиваюсь в сфере дизайна интерфейсов, три года работала фронтенд-разработчиком. Помогу спроектировать дизайн интерфейса и&nbsp;реализовать его в веб-пространстве."
        />
      </ContentColumn>

      <ImageColumn>
        <ResponsiveImage
          src="/images/photo.jpg"
          alt="Фотография Вероники Здоровой"
          fill
          sizes="(max-width: 768px) 100vw, 100%"
          priority
          style={{ objectFit: "cover" }}
        />
      </ImageColumn>
    </OverviewWrapper>
  );
};

export default Overview;

const OverviewWrapper = styled("div")`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContentColumn = styled("div")`
  grid-column: 1 / 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 125px;
  padding: 40px 32px 80px 64px;

  @media (max-width: 768px) {
    padding: 24px 16px 40px;
  }
`;

const ImageColumn = styled("div")`
  grid-column: 2 / 3;
  position: relative;
  min-height: 600px;

  @media (max-width: 768px) {
    min-height: 400px;
  }
`;

const ResponsiveImage = styled(Image)`
  border-radius: 0;
`;
