import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Product Listing Page",
  description: "List of products for sale on the site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gradient-to-r from-slate-200 to-gray-200 py-10 ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
