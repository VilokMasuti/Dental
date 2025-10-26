import TanStackProvider from '@/components/providers/TanStackProvider';
import UserSync from '@/components/UserSync';
import {
  ClerkProvider,
} from '@clerk/nextjs';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentWise - AI Powered Dental Assistant",
  description:
    "Get instant dental advice through voice calls with our AI assistant. Avaiable 24/7.",
 icons: {
    icon: "/hero.png", // or "/favicon.ico"
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <TanStackProvider>
                <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: "#e78a53",
            colorBackground: "#f3f4f6",
            colorText: "#111827",
            colorTextSecondary: "#6b7280",
            colorInputBackground: "#f3f4f6",
          },
        }}
      >
<html lang="en">
     <body className={`${geistSans.variable} ${geistMono.variable} antialiased  dark`}>
             <Toaster />
      <UserSync/>
        {children}
      </body>
    </html>

        </ClerkProvider>

        </TanStackProvider>


  );
}
