import "./globals.css";
import { Poppins } from "next/font/google";
import Header from '@/components/Header'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'], subsets: ["latin"]
});

export const metadata = {
  title: "Rental",
  description: "rent houses and apartments on the web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header/>
        {children}
        footer
      </body>
    </html>
  );
}
