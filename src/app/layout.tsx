import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YUJING JIA | 贾雨婧",
  description: "Yujing Jia is a Chinese fashion/culture writer based in Rotterdam, NL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
