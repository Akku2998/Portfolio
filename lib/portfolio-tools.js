// import { portfolioData } from "./portfolio-data";

// /*
//  * Get basic profile information
//  */
// export function getProfile() {
//   return portfolioData.profile;
// }

// /*
//  * Get all technical skills
//  */
// export function getSkills() {
//   return portfolioData.skills;
// }

// /*
//  * Get professional experience
//  */
// export function getExperience() {
//   return portfolioData.experience;
// }

// /*
//  * Get projects
//  */
// export function getProjects() {
//   return portfolioData.projects;
// }

// /*
//  * Get education
//  */
// export function getEducation() {
//   return portfolioData.education;
// }

// /*
//  * Get a specific project
//  */
// export function getProject(projectName) {
//   const project = portfolioData.projects.find(
//     (project) => project.name.toLowerCase() === projectName.toLowerCase(),
//   );

//   if (!project) {
//     return {
//       found: false,
//       message: "Project not found in the portfolio.",
//     };
//   }

//   return {
//     found: true,
//     project,
//   };
// }
// export function getResume() {
//   return {
//     available: true,
//     fileName: "Nidhi_Kumari_Resume.pdf",
//     downloadUrl: "/Nidhi_Kumari_Resume.pdf",
//     message:
//       "You can download Nidhi Kumari's resume using the download button.",
//   };
// }

import { portfolioData } from "./portfolio-data";

/*
 * Get basic profile information
 */
export function getProfile() {
  return portfolioData.profile;
}

/*
 * Get all technical skills
 */
export function getSkills() {
  return portfolioData.skills;
}

/*
 * Get professional experience
 */
export function getExperience() {
  return portfolioData.experience;
}

/*
 * Get all projects
 */
export function getProjects() {
  return portfolioData.projects;
}

/*
 * Get education information
 */
export function getEducation() {
  return portfolioData.education;
}

/*
 * Get a specific project
 */
export function getProject(args = {}) {
  const projectName = typeof args === "string" ? args : args.projectName;

  if (!projectName || typeof projectName !== "string") {
    return {
      found: false,
      message: "A valid project name was not provided.",
    };
  }

  const normalizedProjectName = projectName.trim().toLowerCase();

  const project = portfolioData.projects.find((project) => {
    const currentProjectName = project.name.toLowerCase();

    return (
      currentProjectName === normalizedProjectName ||
      currentProjectName.includes(normalizedProjectName) ||
      normalizedProjectName.includes(currentProjectName)
    );
  });

  if (!project) {
    return {
      found: false,
      message: "Project not found in the portfolio.",
    };
  }

  return {
    found: true,
    project,
  };
}

/*
 * Get resume download information
 */
export function getResume() {
  return {
    available: true,
    fileName: "Nidhi_Kumari_Resume.pdf",
    downloadUrl: "/Nidhi_Kumari_Resume.pdf",
    message:
      "You can download Nidhi Kumari's resume using the download button.",
  };
}
