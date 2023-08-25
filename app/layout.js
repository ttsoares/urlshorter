import "./globals.css";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
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
    <html lang="en">
      <body className={`${poppins.className} bg-slate-500 w-screen h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
