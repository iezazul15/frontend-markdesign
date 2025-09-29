import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mark Design & Engineering Ltd. - You Dream It, We Build It",
  description: "You Dream It, We Build It",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
