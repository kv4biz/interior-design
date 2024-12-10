import { Oswald, Quattrocento, Russo_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-oswald",
});

const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-quattrocento",
});

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-russo-one",
});

export const metadata = {
  title: "Home D'cor",
  description: "Website for interior design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${quattrocento.variable} ${russoOne.variable} antialiased duration-300 transition-all`}
      >
        <NextThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
