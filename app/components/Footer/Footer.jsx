import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="bg-primary text-white py-8 mt-16">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex space-x-4">
            <p className="text-sm">
              Contact:{" "}
              <a href="aakritinidhi123@gmail.com">aakritinidhi123@gmail.com</a>
            </p>
          </div>

          <div className="mt-4">
            <Link
              href="https://github.com/Akku2998"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-sm underline">Github</p>
            </Link>
          </div>

          <div className="mt-4">
            <p className="text-sm">Location: Bengaluru, India</p>
          </div>
          <p className="mt-4 text-sm">
            Nidhi Gupta &copy; {new Date().getFullYear()} | Frontend Developer
          </p>
        </div>
      </footer>
    </>
  );
}
