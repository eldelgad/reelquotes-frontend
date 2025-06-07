import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import BottomSearchBar from "@/components/layout/BottomSearchBar";

export const metadata: Metadata = {
  title: "ReelQuotes - Discover Memorable Movie & TV Quotes",
  description: "Find and explore memorable quotes from your favorite movies and TV shows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className="antialiased h-full bg-background text-foreground font-sans"
      >
        <div className="flex flex-col h-full">
          <Header />
          <main className="flex-1 overflow-hidden pb-24">
            {children}
          </main>
          <BottomSearchBar />
        </div>
      </body>
    </html>
  );
} 