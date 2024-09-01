import Link from "next/link";
import {
  Github,
  Facebook,
  Linkedin,
  Twitter,
  Insta,
  Chevron,
} from "../../svgs";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="bg-primary text-white py-8 mt-16">
        <div className="container mx-auto flex flex-col items-center">
          {/* <div className="flex space-x-4">
            <p className="text-sm">
              Contact:{" "}
              <a href="aakritinidhi123@gmail.com">aakritinidhi123@gmail.com</a>
            </p>
          </div> */}

          <div className="mt-4">
            {/* <Link
              href="https://github.com/Akku2998"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-sm underline">Github</p>
            </Link> */}

            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <p className="font-body text-lg uppercase text-white">
                {t("connect")}
              </p>
              {/* <div className="hidden sm:flex"> */}
              <i className="text-3xl text-yellow-400">
                <Chevron color="currentColor" />
              </i>
              <Link
                href="https://www.facebook.com/people/Nidhi-Gupta/pfbid0MAP2Zj71H2UpdvjEbNV5UQtzBGGZP1A7qdm746WCQmnLURr1WE9rdsipwKKV2KCtl/?name=xhp_nt__fb__action__open_user"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-4"
              >
                <i className="text-2xl text-white hover:text-yellow-500">
                  <Facebook color="currentColor" />
                </i>
              </Link>
              <Link
                href="https://github.com/Akku2998"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-4"
              >
                <i className="text-2xl text-white hover:text-yellow-500">
                  <Github color="currentColor" />
                </i>
              </Link>
              <Link
                href="https://www.google.com/search?q=twitter&sca_esv=597209220&sxsrf=ACQVn0-eN7yflYsrX9C0uEzMCMTSXU71BQ%3A1704894340311&ei=hJ-eZc_MEqrV4-EPpOGdyAo&ved=0ahUKEwjPnqKs-tKDAxWq6jgGHaRwB6kQ4dUDCBA&uact=5&oq=twitter&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3R3aXR0ZXIyChAjGIAEGIoFGCcyFxAuGIMBGMcBGJECGLEDGNEDGIAEGIoFMhAQABiABBgUGIcCGLEDGIMBMg4QABiABBiKBRiRAhixAzIREAAYgAQYigUYkQIYsQMYgwEyCxAAGIAEGIoFGJECMhEQABiABBiKBRiRAhixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDAUj1D1DqBFifCXABeACQAQCYAWmgAYQDqgEDMy4xuAEDyAEA-AEBwgIJEAAYBxgeGLADwgIOEAAYgAQYsQMYgwEYsAPCAggQABiABBiwA8ICChAAGIAEGBQYhwLCAgUQABiABOIDBBgBIEGIBgGQBgo&sclient=gws-wiz-serp"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-4"
              >
                <i className="bx bxl-twitter text-2xl text-white hover:text-yellow-500">
                  <Twitter color="currentColor" />
                </i>
              </Link>
              <Link
                href="https://www.linkedin.com/in/nidhi-gupta-aati/"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-4"
              >
                <i className="text-2xl text-white hover:text-yellow-500">
                  <Linkedin color="currentColor" />
                </i>
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-4"
              >
                <i className="text-2xl text-white hover:text-yellow-500">
                  <Insta color="currentColor" />
                </i>
              </Link>
            </div>

            <div className="mt-4">
              <p className="text-sm">{t("location")}</p>
            </div>
            <p className="mt-4 text-sm">
              Nidhi Gupta &copy; {new Date().getFullYear()} | Frontend Developer
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
