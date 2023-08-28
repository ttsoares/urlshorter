import "./globals.css";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["500", "700"],
  subsets: ["latin"],
});

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Shortly",
  description: "FrontEnd Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen">
      <body className={`${poppins.className} w-full h-fit`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
