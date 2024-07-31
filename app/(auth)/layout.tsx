
import Provider from "../Provider";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: 'Santehvan',
  description: 'Увійдіть до свого опоблікового запису, щоб приєднатися до Santehvan',
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
           
          <section className = "main-container">
            <div className = "w-full max-w-screen-2xl px-3">
                {children}
            </div>
          </section>

   
        </Provider>
      </body>
    </html>
);
}

