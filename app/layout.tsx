import type { Metadata } from "next";
import "./global.css";
import { Header } from "./ui/header";
import { Footer } from "./ui/footer";

export const metadata: Metadata = {
  title: "Linear – A better way to build products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
