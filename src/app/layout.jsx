import { Oswald, Lato } from "next/font/google";
import styles from "./ui/global.module.scss";
import Header from "./ui/header"
import Footer from "./ui/footer"

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Cristin O'Connor - Frontend Software Engineer",
  description: "Portfolio and blog of Cristin O'Connor, a frontend software engineer specializing in building responsive and user-friendly web applications.",
  favicon: "/images/favicon.ico",
  "apple-icon": "/images/avatar-white.png",
  icon: "/images/illustration.svg"
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className="html">
      <body
        className={`body ${lato.variable} ${oswald.variable}`}>
        <Header />
        <main className={styles["main"]}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
