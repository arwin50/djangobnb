import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/navbar/Navbar";
import "./globals.css";
import { LoginModal } from "./components/modals/LoginModal";
import { SignupModal } from "./components/modals/SignUpModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DjangoBnb",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <div className="pt-32">{children}</div>
        <LoginModal />
        <SignupModal />
      </body>
    </html>
  );
}
