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
 * Get projects
 */
export function getProjects() {
  return portfolioData.projects;
}

/*
 * Get education
 */
export function getEducation() {
  return portfolioData.education;
}

/*
 * Get a specific project
 */
export function getProject(projectName) {
  const project = portfolioData.projects.find(
    (project) => project.name.toLowerCase() === projectName.toLowerCase(),
  );

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
