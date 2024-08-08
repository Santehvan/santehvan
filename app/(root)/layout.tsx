import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import StickyCart from "@/components/shared/StickyCart";
import Provider from "../Provider";
import { AppWrapper } from "./context";
import CartPage from "@/components/shared/CartPage";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";
import GoogleTagManager from "@/components/shared/GoogleTagManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santehvan shop",

  description: "Інтернет-магазин сантехніки та меблів: широкий вибір якісних товарів для ванної кімнати, кухні та дому. Вигідні ціни та акції. Оновіть свій інтер'єр з нами!",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 

  return (
      <html lang="en">
        <GoogleTagManager />
        <body className={inter.className}>
          <Provider>
              <Header/>
              <AppWrapper>
                <main className = "main-container">
                  <div className = "w-full max-w-screen-2xl px-3">
                      {children}
                  </div>
                </main>
                <StickyCart/>
            </AppWrapper>
          <Footer/>
          </Provider>
          <SpeedInsights/>
        </body>
      </html>
  );
}
