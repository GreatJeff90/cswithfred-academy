import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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