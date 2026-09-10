import Link from "next/link";
import { Github, Facebook, Linkedin, Twitter, Insta } from "../../svgs";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Akku2998",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nidhi-gupta-aakriti/",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/nidhi.gupta.16524",
      icon: Facebook,
    },
    // Add your real Twitter/X profile here if you have one
    // {
    //   name: "Twitter",
    //   href: "https://twitter.com/yourusername",
    //   icon: Twitter,
    // },
    // Add your real Instagram profile here if you have one
    // {
    //   name: "Instagram",
    //   href: "https://www.instagram.com/yourusername/",
    //   icon: Insta,
    // },
  ];

  const navigation = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-white/10 dark:bg-[#0d0d0d]">
      <div className="container mx-auto px-5 sm:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:py-16">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white dark:bg-yellow-400 dark:text-black">
                NK
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  Nidhi Kumari
                </h2>

                <p className="text-xs font-medium uppercase tracking-wider text-primary dark:text-yellow-400">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-600 dark:text-gray-400">
              I build modern, scalable web applications using React.js, Next.js,
              Node.js, Express.js, Prisma, and SQL databases.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-black"
                  >
                    <Icon color="currentColor" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-gray-900 dark:text-white">
              Navigation
            </h3>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-sm text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-yellow-400"
                  >
                    <span className="mr-2 h-px w-0 bg-primary transition-all duration-300 group-hover:w-4 dark:bg-yellow-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-gray-900 dark:text-white">
              Let&apos;s Connect
            </h3>

            <p className="mb-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Have a project or opportunity in mind? I&apos;d be happy to
              connect and discuss it.
            </p>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:aakritinidhi123@gmail.com"
                className="block text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-yellow-400"
              >
                aakritinidhi123@gmail.com
              </a>

              <a
                href="tel:+916205098469"
                className="block text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-yellow-400"
              >
                +91 62050 98469
              </a>

              <p className="text-gray-600 dark:text-gray-400">
                Bengaluru, Karnataka, India
              </p>
            </div>

            <Link
              href="#contact"
              className="mt-6 inline-flex items-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300"
            >
              Get In Touch
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-3 border-t border-gray-200 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left dark:border-white/10">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {currentYear} Nidhi Kumari. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 dark:text-gray-500">
            Designed & developed with{" "}
            <span className="font-medium text-primary dark:text-yellow-400">
              React & Next.js
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
