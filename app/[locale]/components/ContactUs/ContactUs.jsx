"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const ContactUs = ({ setPageRef }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };
  const validate = () => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = t("nameRequired");
    }
    if (!formData.email) {
      formErrors.email = t("emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = t("invalidEmail");
    }
    if (!formData.message) {
      formErrors.message = t("messageRequired");
    }
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Message sent successfully!");
      } else {
        console.error("Error:", response.statusText);
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <>
      <section
        className="container mx-auto mt-16 text-center"
        ref={(element) => setPageRef("contact", element)}
      >
        <div className="flex flex-col text-center items-center">
          <h2 className="text-center font-header text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl text-primary dark:text-black">
            {t("contactForm")}
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            {t("haveQuestions")}
          </h3>
          <p className="pt-6 leading-relaxed w-9/12 text-grey-100 text-center ">
            {t("contactDsc")}
          </p>
        </div>
        <form
          className="max-w-md mx-auto mt-8 text-left"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {t("name")}
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded focus:dark:outline-black"
              placeholder={t("yourName")}
              onChange={handleChange}
              value={formData.name}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:dark:outline-black"
              placeholder={t("yourEmail")}
              onChange={handleChange}
              value={formData.email}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {t("msg")}
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border rounded focus:dark:outline-black"
              placeholder={t("yourMsg")}
              rows="4"
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-primary dark:bg-black text-white px-8 py-4 rounded-full"
          >
            {t("sendMsg")}
          </button>
        </form>

        <div className="flex flex-col pt-16 lg:flex-row">
          <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
            <div className="flex items-center">
              <p className="uppercase text-gray-400 lg:text-lg">
                {t("myPhone")}
              </p>
            </div>
            <p className="pt-2 text-left font-semibold  text-voilet-50 dark:text-black lg:text-lg ">
              (+91) 6205098469
            </p>
          </div>
          <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <p className="uppercase text-gray-400 lg:text-lg ">
                {t("myEmail")}
              </p>
            </div>
            <p className="pt-2 text-left font-body  font-semibold text-voilet-50 lg:text-lg dark:text-black">
              aakritinidhi123@gmail.com
            </p>
          </div>
          <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <p className="uppercase text-gray-400 lg:text-lg">
                {t("myAddress")}
              </p>
            </div>
            <p className="pt-2 text-left font-body font-semibold  text-voilet-50 lg:text-lg dark:text-black">
              Shravanthi woods, Nobo Nagar Bengaluru
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
