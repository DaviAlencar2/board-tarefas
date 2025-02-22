import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/header/header";
import ClientProviders from "@/components/ClientProviders";
import {SessionProvider} from "next-auth/react";

export const metadata: Metadata = {
  title: "Aprendendo",
  description: "Create by Davi Leite + Matheus Fraga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="pt-br">
      <body className="bg-black text-white">
        <ClientProviders>
          <Header />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}