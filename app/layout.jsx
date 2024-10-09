import localFont from "next/font/local";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import { ThemeProvider } from "./provider";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Apromax Engineering",
  description:
    "AproMax Engineering is a multidisciplinary engineering and design firm that combines expertise in engineering, design, and technology to drive progress and innovation. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="hidden md:block">
            <NavbarDemo />
          </div>

          {/* Render MobileNav for small devices */}
          <div className="block md:hidden">
            <MobileNav />
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
