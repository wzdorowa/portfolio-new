import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Вероника Здорова - Портфолио",
  description: "Портфолио UI/UX дизайнера и фронтенд-разработчика",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
