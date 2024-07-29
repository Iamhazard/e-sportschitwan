import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Home/Navbar";
import { cn } from "@/lib/utils";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import Footer from "@/components/Home/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "E-SAN",
  description: "E-sport committe chitwan",
  icons: {
    icon: '/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "relative h-full font-sans antialiased ",
          `${inter.variable} ${ibmPlexSerif.variable}`
        )}
      >
        <main className="relative flex flex-col min-h-screen ">
          <Navbar />
          {children}
        </main>
        <div>

          <Footer />
        </div>

      </body>
    </html >
  );
}
