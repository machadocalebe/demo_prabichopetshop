import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PraBicho Petshop",
  description: "Tudo para o nosso melhor amigo. Entrega rápida e os melhores produtos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} antialiased`}>
      <body className="font-sans min-h-screen flex flex-col bg-offwhite text-gray-800 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
