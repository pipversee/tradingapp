import type { Metadata } from "next";
import "./globals.css";
import QueryClientLayout from "./QueryClientProvider";
import { AdminProvider } from "@/context/AdminContext";


export const metadata: Metadata = {
  title: "PipVerse",
  description: "A platform designed to make you profitable in your stocks trading journey",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <QueryClientLayout>
          <AdminProvider>
            {children}
          </AdminProvider>
        </QueryClientLayout>
      </body>
    </html>
  );
}
