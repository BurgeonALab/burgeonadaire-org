import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Red_Hat_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Organization | PT. Burgeon Adaire International",
  description: "Burgeon Adaire Organization.",
  authors: [
    {
      name: "PT. Burgeon Adaire International",
      url: "https://burgeonadaire.com"
    }
  ],
  openGraph: {
    title: "Organization | PT. Burgeon Adaire International",
    description: "Burgeon Adaire Organization.",
    locale: "en_US",
    alternateLocale: "id_ID",
    type: "website",
    url: "https://org.burgeonadaire.com",
    siteName: "Burgeon Adaire Organization",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>

      <Script id="gtg-script1" async src="https://www.googletagmanager.com/gtag/js?id=G-RV5QV9EZEE"></Script>
      <Script id="gtg-script2">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RV5QV9EZEE');
        `}
      </Script>
    </html>
  );
}
