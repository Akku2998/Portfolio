import Link from "next/link";
export default function Homelink() {
  return (
    <>
      <section id="home" className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Hello, I'm Nidhi Gupta</h1>
        <p className="text-lg">
          Welcome to my portfolio! I'm a passionate frontend developer with
          expertise in creating beautiful and interactive user interfaces using
          React.js, HTML, CSS, and JavaScript.
        </p>
        <div className="mt-8">
          <Link
            href="/portfolio"
            className="bg-blue-500 text-white px-6 py-2 rounded-full
            inline-block mr-4"
          >
            {" "}
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="bg-gray-800 text-white px-6 py-2 rounded-full
            inline-block"
          >
            {" "}
            Contact Me
          </Link>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Key Skills</h2>
          <ul className="list-disc list-inside">
            <li>React.js</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Responsive Web Design</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
      </section>
    </>
  );
}
