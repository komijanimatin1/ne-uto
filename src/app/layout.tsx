import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeUto",
  description: "A news agency without reporters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
