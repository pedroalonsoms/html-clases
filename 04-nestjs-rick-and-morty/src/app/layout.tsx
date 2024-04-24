import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { paths } from "@/const/paths";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick & Morty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 text-base text-slate-50`}
      >
        <main>
          <nav className="flex justify-center bg-slate-500 px-2 py-2">
            <div className="flex gap-10">
              <Link href={paths.allCharacters}>All characters</Link>
              <Link href={paths.favoriteCharacters}>Favorite characters</Link>
            </div>
          </nav>
          <div className="mx-auto grid max-w-screen-lg grid-cols-3 gap-10 pt-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
