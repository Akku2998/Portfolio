import {
  getProfile,
  getSkills,
  getExperience,
  getProjects,
  getEducation,
  getProject,
} from "./portfolio-tools";

export const portfolioTools = [
  {
    functionDeclarations: [
      {
        name: "getProfile",
        description:
          "Get Nidhi Kumari's basic professional profile including her name, title, experience, location and professional summary.",
        parameters: {
          type: "object",
          properties: {},
        },
      },

      {
        name: "getSkills",
        description:
          "Get Nidhi Kumari's technical skills including programming languages, frontend, backend, database and development tools.",
        parameters: {
          type: "object",
          properties: {},
        },
      },

      {
        name: "getExperience",
        description:
          "Get Nidhi Kumari's professional work experience and responsibilities.",
        parameters: {
          type: "object",
          properties: {},
        },
      },

      {
        name: "getProjects",
        description: "Get information about Nidhi Kumari's portfolio projects.",
        parameters: {
          type: "object",
          properties: {},
        },
      },

      {
        name: "getEducation",
        description: "Get Nidhi Kumari's educational background.",
        parameters: {
          type: "object",
          properties: {},
        },
      },

      {
        name: "getProject",
        description: "Get detailed information about a specific project.",
        parameters: {
          type: "object",
          properties: {
            projectName: {
              type: "string",
              description: "The name of the project.",
            },
          },
          required: ["projectName"],
        },
      },
    ],
  },
];

/*
 * Actual functions Gemini can request
 */
export const availableFunctions = {
  getProfile,

  getSkills,

  getExperience,

  getProjects,

  getEducation,

  getProject,
};
