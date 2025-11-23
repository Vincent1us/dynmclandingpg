"use client";

import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="!p-0 !m-0">
        <Sidebar title="">
          {children}
        </Sidebar>
      </body>
    </html>
  );
}
