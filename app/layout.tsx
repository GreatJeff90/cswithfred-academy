import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Metadata } from "next";
import { Link } from "lucide-react";

export const metadata: Metadata = {
  title: "CS with Fred | Engineering & Research Academy", // Changes the Tab Title
  description: "Master computer science foundations, distributed systems, and AI with Fredrick O. Mensah.",
  icons: {
    icon: "/favicon.ico", // This changes the small icon in the tab
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0b1220] text-slate-200">
        <Navbar />
        {/* Added a main wrapper with pt-32 to clear the floating navbar */}
        <main className="pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}