import "./globals.css";
import { Raleway, Open_Sans } from "next/font/google";
import { CustomLayout } from "./components";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(props) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${openSans.variable} sans-serif`}
    >
      <body>
        <CustomLayout {...props} />
      </body>
    </html>
  );
}