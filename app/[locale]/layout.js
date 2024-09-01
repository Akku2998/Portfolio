import "./globals.css";
import { Raleway, Open_Sans } from "next/font/google";
import { CustomLayout } from "./components";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";
import initTranslations from "@/i18n";
import TranslationsProvider from "@/app/[locale]/context/translationProvider";

const i18nNamespaces = ["home"];

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

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ params: { locale }, ...rest }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className={`${raleway.variable} ${openSans.variable} sans-serif`}
    >
      <body>
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <CustomLayout {...rest} />
        </TranslationsProvider>
      </body>
    </html>
  );
}
