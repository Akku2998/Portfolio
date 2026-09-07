"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const ContactUs = ({ setPageRef }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [id]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [id]: "",
    }));

    setSuccessMessage("");
    setErrorMessage("");
  };

  const validate = () => {
    const formErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      formErrors.name = t("nameRequired");
    }

    if (!formData.email.trim()) {
      formErrors.email = t("emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = t("invalidEmail");
    }

    if (!formData.message.trim()) {
      formErrors.message = t("messageRequired");
    }

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    const formErrors = validate();

    if (formErrors.name || formErrors.email || formErrors.message) {
      setErrors(formErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      await response.json();

      setSuccessMessage(
        "Your message has been sent successfully. I will get back to you soon.",
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);

      setErrorMessage(
        "Something went wrong while sending your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={(element) => setPageRef("contact", element)}
      className="bg-gray-50 py-12 dark:bg-[#0d0d0d] sm:py-14"
    >
      <div className="container mx-auto px-5 sm:px-8">
        {/* =====================================
            SECTION HEADER
        ====================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary dark:border-yellow-400/20 dark:bg-yellow-400/5 dark:text-yellow-400">
            Get In Touch
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            {t("contactForm")}
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-primary dark:bg-yellow-400" />

          <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-gray-200 sm:text-2xl">
            {t("haveQuestions")}
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
            {t("contactDsc")}
          </p>
        </div>

        {/* =====================================
            MAIN CONTACT AREA
        ====================================== */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-10 lg:grid-cols-5 lg:items-start">
          {/* =====================================
              LEFT CONTACT INFORMATION
          ====================================== */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-primary p-8 text-white shadow-xl sm:p-10 dark:bg-[#171717] dark:ring-1 dark:ring-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60 dark:text-yellow-400">
                Contact Details
              </p>

              <h3 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                Let&apos;s talk about your next project.
              </h3>

              <p className="mt-5 leading-7 text-white/70">
                Whether you have a project idea, a job opportunity, or simply
                want to connect, feel free to send me a message.
              </p>

              {/* Contact Details */}
              <div className="mt-10 space-y-6">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <span className="text-lg">☎</span>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      {t("myPhone")}
                    </p>

                    <Link
                      href="tel:+916205098469"
                      className="mt-1 block text-base font-semibold transition hover:text-yellow-300"
                    >
                      (+91) 6205098469
                    </Link>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <span className="text-lg">✉</span>
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      {t("myEmail")}
                    </p>

                    <Link
                      href="mailto:aakritinidhi123@gmail.com"
                      className="mt-1 block break-all text-base font-semibold transition hover:text-yellow-300"
                    >
                      aakritinidhi123@gmail.com
                    </Link>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <span className="text-lg">⌖</span>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      {t("myAddress")}
                    </p>

                    <p className="mt-1 text-base font-semibold leading-6">
                      Bengaluru, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Small bottom message */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-sm leading-6 text-white/50">
                  Available for professional opportunities, freelance projects,
                  and technical collaborations.
                </p>
              </div>
            </div>
          </div>

          {/* =====================================
              RIGHT CONTACT FORM
          ====================================== */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10 dark:border-white/10 dark:bg-[#151515]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary dark:text-yellow-400">
                  Send a Message
                </p>

                <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  I&apos;d love to hear from you.
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200"
                  >
                    {t("name")}
                  </label>

                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("yourName")}
                    className={`w-full rounded-xl border bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 dark:bg-white/[0.03] dark:text-white ${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-200 focus:border-primary dark:border-white/10 dark:focus:border-yellow-400"
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200"
                  >
                    {t("email")}
                  </label>

                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("yourEmail")}
                    className={`w-full rounded-xl border bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 dark:bg-white/[0.03] dark:text-white ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-200 focus:border-primary dark:border-white/10 dark:focus:border-yellow-400"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200"
                  >
                    {t("msg")}
                  </label>

                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("yourMsg")}
                    className={`w-full resize-none rounded-xl border bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 dark:bg-white/[0.03] dark:text-white ${
                      errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-200 focus:border-primary dark:border-white/10 dark:focus:border-yellow-400"
                    }`}
                  />

                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Success Message */}
                {successMessage && (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm leading-6 text-green-700 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400">
                    {successMessage}
                  </div>
                )}

                {/* Error Message */}
                {errorMessage && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
                    {errorMessage}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 dark:bg-yellow-400 dark:text-black"
                >
                  {isSubmitting ? "Sending..." : `${t("sendMsg")} →`}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* =====================================
            BOTTOM CTA
        ====================================== */}
        <div className="mx-auto mt-12 max-w-6xl rounded-3xl border border-gray-200 bg-white px-6 py-8 text-center dark:border-white/10 dark:bg-[#151515] sm:px-10">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
            Looking for a Full Stack Developer?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
            I&apos;m open to discussing full-stack development opportunities and
            projects involving React, Next.js, Node.js, and modern web
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

// "use client";
// import { useState } from "react";
// import { useTranslation } from "react-i18next";

// export const ContactUs = ({ setPageRef }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});

//   const { t } = useTranslation();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//     setErrors({ ...errors, [e.target.id]: "" });
//   };
//   const validate = () => {
//     let formErrors = {};
//     if (!formData.name) {
//       formErrors.name = t("nameRequired");
//     }
//     if (!formData.email) {
//       formErrors.email = t("emailRequired");
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       formErrors.email = t("invalidEmail");
//     }
//     if (!formData.message) {
//       formErrors.message = t("messageRequired");
//     }
//     return formErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formErrors = validate();

//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }

//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert("Message sent successfully..!");
//       } else {
//         console.error("Error:", response.statusText);
//         alert("Error sending message. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An unexpected error occurred. Please try again later.");
//     }
//   };

//   return (
//     <>
//       <section
//         className="container mx-auto mt-16 text-center"
//         ref={(element) => setPageRef("contact", element)}
//       >
//         <div className="flex flex-col text-center items-center">
//           <h2 className="text-center font-header text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl text-primary dark:text-black">
//             {t("contactForm")}
//           </h2>
//           <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
//             {t("haveQuestions")}
//           </h3>
//           <p className="pt-6 leading-relaxed w-9/12 text-grey-100 text-center ">
//             {t("contactDsc")}
//           </p>
//         </div>
//         <form
//           className="max-w-md mx-auto mt-8 text-left"
//           onSubmit={handleSubmit}
//         >
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               {t("name")}
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="w-full px-3 py-2 border rounded focus:dark:outline-black"
//               placeholder={t("yourName")}
//               onChange={handleChange}
//               value={formData.name}
//               required
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm">{errors.name}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               {t("email")}
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-3 py-2 border rounded focus:dark:outline-black"
//               placeholder={t("yourEmail")}
//               onChange={handleChange}
//               value={formData.email}
//               required
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm">{errors.email}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="message"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               {t("msg")}
//             </label>
//             <textarea
//               id="message"
//               className="w-full px-3 py-2 border rounded focus:dark:outline-black"
//               placeholder={t("yourMsg")}
//               rows="4"
//               onChange={handleChange}
//               value={formData.message}
//               required
//             ></textarea>
//             {errors.message && (
//               <p className="text-red-500 text-sm">{errors.message}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="bg-primary dark:bg-black text-white px-8 py-4 rounded-full"
//           >
//             {t("sendMsg")}
//           </button>
//         </form>

//         <div className="flex flex-col pt-16 lg:flex-row">
//           <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
//             <div className="flex items-center">
//               <p className="uppercase text-gray-400 lg:text-lg">
//                 {t("myPhone")}
//               </p>
//             </div>
//             <p className="pt-2 text-left font-semibold  text-voilet-50 dark:text-black lg:text-lg ">
//               (+91) 6205098469
//             </p>
//           </div>
//           <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
//             <div className="flex items-center">
//               <p className="uppercase text-gray-400 lg:text-lg ">
//                 {t("myEmail")}
//               </p>
//             </div>
//             <p className="pt-2 text-left font-body  font-semibold text-voilet-50 lg:text-lg dark:text-black">
//               aakritinidhi123@gmail.com
//             </p>
//           </div>
//           <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
//             <div className="flex items-center">
//               <p className="uppercase text-gray-400 lg:text-lg">
//                 {t("myAddress")}
//               </p>
//             </div>
//             <p className="pt-2 text-left font-body font-semibold  text-voilet-50 lg:text-lg dark:text-black">
//               Shravanthi Woods, Nobo Nagar Bengaluru
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
