// Import necessary FontAwesome components and icons

import Image from "next/image";

export default function Skills() {
  return (
    <>
      <section id="skills" className="container mx-auto mt-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Add your skill components or visuals here */}
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold">
            <Image src="/html.svg" alt="html" width={100} height={100} />
            HTML5
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold">
            <Image src="/react.svg" alt="React" width={100} height={100} />
            ReactJs
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold">
            <Image src="/css.svg" alt="css" width={100} height={100} />
            CSS
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold">
            <Image src="/js.svg" alt="js" width={100} height={100} />
            JavaScript
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold">
            <Image src="/nicon.svg" alt="nicon" width={100} height={100} />
            NextJs
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold">
            <Image
              src="/tailwind.svg"
              alt="tailwind"
              width={100}
              height={100}
            />
            Tailwind
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold">
            <Image src="/java.svg" alt="java" width={100} height={100} />
            Core Java
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold">
            <Image src="/github.svg" alt="github" width={100} height={100} />
            Github
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold">
            <Image src="/git.svg" alt="git" width={100} height={100} />
            Git
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold">
            <Image src="/webpack.svg" alt="webpack" width={100} height={100} />
            Webpack
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold">
            <Image src="/debug.svg" alt="debug" width={100} height={100} />
            Debugging
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold">
            <Image
              src="/teamwork.svg"
              alt="teamwork"
              width={100}
              height={100}
            />
            Teamwork
          </div>
        </div>
      </section>
    </>
  );
}
