"use client";

import { styled } from "@mui/material/styles";
import Overview from "../components/Overview/Overview";

export default function Home() {
  return (
    <MainWrapper>
      <Overview />
    </MainWrapper>
  );
}

const MainWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
