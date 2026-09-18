import {
  getProfile,
  getSkills,
  getExperience,
  getProjects,
  getEducation,
  getProject,
  getResume,
} from "./portfolio-tools";

/*
 * Function declarations given to Gemini
 */
export const portfolioTools = [
  {
    functionDeclarations: [
      {
        name: "getProfile",
        description:
          "Get Nidhi Kumari's basic professional profile, including her name, title, experience, location, and professional summary.",
        parameters: {
          type: "object",
          properties: {},
        },
      },

      {
        name: "getSkills",
        description:
          "Get Nidhi Kumari's technical skills, including programming languages, frontend, backend, database, and development tools.",
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
        description:
          "Get detailed information about a specific project. Use this when the visitor asks about a particular project, including the Pharmacy Management SaaS project.",
        parameters: {
          type: "object",
          properties: {
            projectName: {
              type: "string",
              description: "The name or relevant description of the project.",
            },
          },
          required: ["projectName"],
        },
      },

      {
        name: "getResume",
        description:
          "Get the resume download information. Use this when the visitor asks for Nidhi's resume, CV, biodata, downloadable resume, or wants to see her resume.",
        parameters: {
          type: "object",
          properties: {},
        },
      },
    ],
  },
];

/*
 * Map Gemini function names to actual JavaScript functions
 */
export const availableFunctions = {
  getProfile,
  getSkills,
  getExperience,
  getProjects,
  getEducation,
  getProject,
  getResume,
};

// import {
//   getProfile,
//   getSkills,
//   getExperience,
//   getProjects,
//   getEducation,
//   getProject,
//   getResume,
// } from "./portfolio-tools";

// export const portfolioTools = [
//   {
//     functionDeclarations: [
//       {
//         name: "getProfile",
//         description:
//           "Get Nidhi Kumari's basic professional profile including her name, title, experience, location and professional summary.",
//         parameters: {
//           type: "object",
//           properties: {},
//         },
//       },

//       {
//         name: "getSkills",
//         description:
//           "Get Nidhi Kumari's technical skills including programming languages, frontend, backend, database and development tools.",
//         parameters: {
//           type: "object",
//           properties: {},
//         },
//       },

//       {
//         name: "getExperience",
//         description:
//           "Get Nidhi Kumari's professional work experience and responsibilities.",
//         parameters: {
//           type: "object",
//           properties: {},
//         },
//       },

//       {
//         name: "getProjects",
//         description: "Get information about Nidhi Kumari's portfolio projects.",
//         parameters: {
//           type: "object",
//           properties: {},
//         },
//       },

//       {
//         name: "getEducation",
//         description: "Get Nidhi Kumari's educational background.",
//         parameters: {
//           type: "object",
//           properties: {},
//         },
//       },

//       {
//         name: "getProject",
//         description: "Get detailed information about a specific project.",
//         parameters: {
//           type: "object",
//           properties: {
//             projectName: {
//               type: "string",
//               description: "The name of the project.",
//             },
//           },
//           required: ["projectName"],
//         },
//       },

//       {
//         name: "getResume",
//         description:
//           "Get the download link and information for Nidhi Kumari's resume. Use this when a visitor asks for her resume, CV, biodata, or downloadable resume.",
//         parameters: {
//           type: "object",
//           properties: {},
//         },
//       },
//     ],
//   },
// ];

// /*
//  * Actual functions Gemini can request
//  */
// export const availableFunctions = {
//   getProfile,

//   getSkills,

//   getExperience,

//   getProjects,

//   getEducation,

//   getProject,

//   getResume,
// };
