import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Rivreach | Best Digital Marketing & Growth Agency",
  description: "Data-driven digital marketing agency delivering 3.5x average ROI across SEO, PPC, Social Media, and Web Development.",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="font-sans bg-slate-50 text-slate-900 min-h-full flex flex-col selection:bg-blue-500 selection:text-white overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
