"use client";
import { Hero } from "../../svgs/Hero";

export const Portfolio = ({ setPageRef }) => {
  const projects = [
    {
      title: "Project 1 - Online Hotel Booking System",
      description:
        "The purpose of this project is to create and execute an online hotel room reservation system that will take the place of the current manual system.It offers security features, such as the restriction of access to only authorised users,that is to maintain confidentiality, au- thenticity and integrity of stored information. That user information should be verified with the user information stored in the database tables and if it is information matches, they should be able to access system.",
      technologies: ["HTMl", "CSS", "javaScript", "C#"],
    },
    {
      title: "Project 2 - MultiDashboard",
      description:
        "A unified web app combining movie details, Pokémon stats, and social media profiles. Seamlessly switch between dashboards, explore diverse content, and dive into single-user views. Engage with dynamic elements for an immersive, all-in-one exploration experience. This project is not just about combining data but also about leveraging cutting-edge technologies. The application seamlessly integrates React for a responsive and modular front-end.",
      technologies: ["HTML", "CSS", "Tailwind", "RactJS", "Routers"],
    },
    {
      title: "Project 3 - Portfolio Website",
      description:
        "This portfolio, meticulously crafted with React and Next.js 14, not only reflects my technical proficiency but also my commitment to creating delightful user experiences. By harnessing the power of these cutting-edge technologies, I aim to showcase not just what's achievable, but what's transformative in the realm of web development. This portfolio is built using the latest versions of React and Next.js, ensuring optimal performance and leveraging the benefits of server-side rendering and static site generation. It's not just a collection of projects; it's a testament to the ever-evolving landscape of web development and my dedication to staying at its forefront.",
      technologies: ["React.js", "Nextjs", "Tailwind CSS"],
    },
  ];
  return (
    <>
      <div className="flex justify-center mb-[-0.2rem]">
        <Hero className="" />
      </div>
      <section
        className="section bg-primary text-white pb-52"
        ref={(element) => setPageRef("portfolio", element)}
      >
        <div className="container mx-auto">
          <div className="flex flex-col text-center items-center">
            <h2 className="font-header py-16 md:py-10 mx-auto mt-8 text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl">
              Check out my portfolio
            </h2>
            <h3 className="font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl">
              Here&apos;s what I have done with the past
            </h3>
            <p
              className="pt-6 leading-relaxed w-9/12"
              style={{
                color: "rgb(124 124 124/2)",
              }}
            >
              Welcome to my digital space! I&apos;m Nidhi Gupta, a passionate
              frontend developer dedicated to crafting beautiful and intuitive
              user experiences. With a keen eye for design and a commitment to
              clean, efficient code, I bring ideas to life in the digital realm.
              In the ever-evolving world of web development, I thrive on staying
              at the forefront of technology. From responsive web design to
              interactive user interfaces, my goal is to create seamless and
              engaging experiences for users.
            </p>
          </div>
        </div>
      </section>
      <section
        id="portfolio"
        className="container  mx-auto mt-[-8rem] text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <div className="text-gray-500 ">
                <div className=" text-black font-bold">Technologies:</div>
                {project.technologies.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
