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
      "A unified web app combining movie details, Pokémon stats, and social media profiles. Seamlessly switch between dashboards, explore diverse content, and dive into single-user views. Engage with dynamic elements for an immersive, all-in-one exploration experience.",
    technologies: ["HTML", "CSS", "Tailwind", "RactJS", "Routers"],
  },
  {
    title: "Project 3 - Portfolio Website",
    description: "My own portfolio website showcasing my skills and projects.",
    technologies: ["React.js", "Nextjs", "Tailwind CSS"],
  },
];

export default function Portfolio() {
  return (
    <>
      <section id="portfolio" className="container mx-auto mt-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <div className="text-gray-500 ">
                <section className=" text-black font-bold">
                  {" "}
                  Technologies:{" "}
                </section>
                {project.technologies.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
