"use client";
import { useTranslation } from "react-i18next";
export const WorkPage = ({ setPageRef }) => {
  const { t } = useTranslation();
  return (
    <div>
      <section
        className="section bg-primary text-white pb-52"
        ref={(element) => setPageRef("work", element)}
      >
        <div className="container mx-auto">
          <div className="flex flex-col text-center items-center">
            <h2 className="font-header py-16 md:py-10 mx-auto mt-8 text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl">
              {t("recentWork")}
            </h2>
            {/* <h3 className="font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl">
              {t("hereIs")}
            </h3> */}
            <p
              className="pt-6 leading-relaxed w-9/12"
              style={{
                color: "rgb(240, 234, 214)",
              }}
            >
              {t("workDsc")}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-[-8rem] text-center">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center mb-4"></div>
                  <span className="fa-stack fa-2x">
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 74 65"
                        fill="#5540af"
                        className="w-14 h-auto font-bold"
                      >
                        <path d="M47.6154613,51.4984858 C54.7951633,51.4984858 60.6154613,45.6781878 60.6154613,38.4984858 C60.6154613,31.3187838 54.7951633,25.4984858 47.6154613,25.4984858 C45.7504763,25.4984858 43.9772163,25.8912058 42.3738673,26.5984598 L41.1799803,24.9452658 C43.1301413,24.0176208 45.3121763,23.4984858 47.6154613,23.4984858 C55.8997333,23.4984858 62.6154613,30.2142138 62.6154613,38.4984858 C62.6154613,46.7827578 55.8997333,53.4984858 47.6154613,53.4984858 C41.0843663,53.4984858 35.5281713,49.3244478 33.4689893,43.4984858 L10.6242363,43.4984858 C10.0671053,43.4984858 9.84007032,43.1166498 10.1198493,42.6410268 L29.1110733,10.3559448 C29.3896393,9.88238279 29.8400703,9.88032179 30.1198493,10.3559448 L49.1110733,42.6410268 C49.3896393,43.1145888 49.1662423,43.4984858 48.6066863,43.4984858 L39.0000001,43.4984856 L39,41.4984858 L46.1154613,41.4984858 L29.6154613,13.4984858 L13.1154613,41.4984858 L34.8322697,41.4984858 L35.6132812,43.5299944 C37.5970895,48.2150054 42.2228264,51.4984858 47.6154613,51.4984858 Z" />
                      </svg>
                    </div>
                  </span>
                  <h1 className="text-xl font-semibold mb-4">
                    {t("designer")}
                  </h1>
                  <p className="mb-4">{t("designerDsc")}</p>
                  <p
                    className=" font-semibold text-lg mt-2"
                    style={{ color: "rgba(85, 64, 175)" }}
                  >
                    {t("designerLanguage")}
                  </p>
                  <p className="mb-4">UX, UI, Web, Apps, Logos</p>
                  <p
                    className=" font-bold mb-2"
                    style={{ color: "rgba(85, 64, 175)" }}
                  >
                    {t("dtool")}
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Affinity Designer</li>
                    <li>Figma</li>
                    <li>Pen & Paper</li>
                    <li>Sketch</li>
                    <li>Origami</li>
                    <li>Axure</li>
                  </ul>
                </div>

                <div className="flex flex-col items-center mb-6">
                  <div className="flex items-center mb-4"></div>
                  <span className="fa-stack fa-2x">
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        className=" w-14 h-auto"
                        fill="#5540af"
                      >
                        <title>programming-merge</title>
                        <path d="M61.996,22.231c-0.929,0-1.858,0.563-2.225,1.434L35.919,74.337c-0.591,1.152-0.028,2.699,1.126,3.233   c1.154,0.534,2.704-0.056,3.182-1.209l23.852-50.7c0.338-0.703,0.311-1.603-0.112-2.278C63.573,22.709,62.785,22.259,61.996,22.231   L61.996,22.231z M32.371,30.189c-0.62,0.056-1.211,0.337-1.633,0.787L14.854,48.41c-0.789,0.872-0.789,2.334,0,3.178l15.883,17.435   c0.845,0.984,2.506,1.096,3.436,0.252c0.958-0.871,1.014-2.53,0.113-3.43L19.839,50.013l14.447-15.832   c0.647-0.703,0.789-1.799,0.394-2.643C34.258,30.695,33.3,30.133,32.371,30.189L32.371,30.189z M67.348,30.189   c-0.901,0.056-1.746,0.646-2.084,1.49c-0.338,0.815-0.142,1.828,0.45,2.502l14.447,15.832L65.714,65.845   c-0.901,0.899-0.845,2.559,0.112,3.43c0.93,0.844,2.591,0.732,3.436-0.252l15.884-17.435c0.788-0.844,0.788-2.306,0-3.178   L69.262,30.976C68.783,30.442,68.051,30.161,67.348,30.189L67.348,30.189z"></path>
                      </svg>
                    </div>
                  </span>
                  <h1 className="text-xl font-semibold mb-2">
                    {t("frontend")}
                  </h1>
                  <p className="mb-4">{t("frontendDsc")}</p>
                  <p
                    className=" font-semibold text-lg mt-2"
                    style={{ color: "rgba(85, 64, 175)" }}
                  >
                    {t("frontendLanguage")}
                  </p>
                  <p className="mb-4">
                    HTML, Pug, javaScript, ReactJs, CSS, Sass, Git
                  </p>
                  <p
                    className=" font-bold mb-2"
                    style={{ color: "rgba(85, 64, 175)" }}
                  >
                    {t("ftool")}
                  </p>
                  <ul className="list-disc list-inside">
                    <li>NextJs</li>
                    <li>Bootstrap</li>

                    <li>Github</li>
                    <li>Netlify</li>
                    <li>Tailwind CSS</li>
                    <li>VS Code</li>
                  </ul>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center mb-4">
                    <span className="relative"></span>
                  </div>
                  <span className="fa-stack fa-2x">
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        className=" w-14 h-auto"
                        fill="#5540af"
                      >
                        <title>programming-merge</title>
                        <path d="M82,41a9.01,9.01,0,0,0-8.768,7H57.788a4.967,4.967,0,0,1-4.659-3.188L49.6,35.738A8.944,8.944,0,0,0,41.211,30H26.768a9,9,0,1,0,0,4H41.211a4.968,4.968,0,0,1,4.66,3.188L49.4,46.262A8.973,8.973,0,0,0,52.152,50,8.971,8.971,0,0,0,49.4,53.738l-3.53,9.075A4.967,4.967,0,0,1,41.211,66H26.768a9,9,0,1,0,0,4H41.211A8.943,8.943,0,0,0,49.6,64.262l3.53-9.075A4.967,4.967,0,0,1,57.788,52H73.232A9,9,0,1,0,82,41ZM18,37a5,5,0,1,1,5-5A5.006,5.006,0,0,1,18,37Zm0,36a5,5,0,1,1,5-5A5.006,5.006,0,0,1,18,73ZM82,55a5,5,0,1,1,5-5A5.006,5.006,0,0,1,82,55Z" />
                      </svg>
                    </div>
                  </span>
                  <h1 className="text-xl font-semibold mb-2">{t("backend")}</h1>
                  <p className="mb-4">{t("backendDsc")}</p>
                  <p
                    className=" font-semibold text-lg mt-2"
                    style={{ color: "rgba(85, 64, 175)" }}
                  >
                    {t("backendLanguage")}
                  </p>
                  <p className="mb-4">PHP, Python, Ruby, Java</p>
                  <p
                    className=" font-bold mb-2"
                    style={{ color: "rgba(85, 64, 175)" }}
                  >
                    {t("btool")}
                  </p>
                  <ul className="list-disc list-inside">
                    <li>MySQL PostgreSQL</li>
                    <li>Node JS</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
