import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { NavbarDemo } from "@/components/NarBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Onelga",
  description: "Onelga is the future of tech, health and finance all wrap together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto px-4">
          <Providers>
            <NavbarDemo />
            {children}             
          </Providers>        
        </div>
        </body>
    </html>
  );
}
