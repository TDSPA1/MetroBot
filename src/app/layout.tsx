import type { Metadata } from "next";
import "./globals.css";
import Header from "../../components/header";
import Footer from "../../components/footer";


export const metadata: Metadata = {
  title: "Metrobot",
  description: "Criado para facilitar a vida dos usuários do metrô de São Paulo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
