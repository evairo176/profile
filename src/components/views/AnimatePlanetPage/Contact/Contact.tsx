"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <section
      id="contact"
      className="container mx-auto px-4 py-32 text-gray-800 md:px-0 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid gap-16 overflow-hidden lg:grid-cols-2"
      >
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl font-bold text-gray-600 dark:text-gray-300"
          >
            {t("title.base")}
            <span className="text-purple-600 dark:text-purple-500">
              {t("title.highlight")}
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass space-y-8 rounded-2xl p-8"
          >
            <div className="space-y-2">
              <p className="text-lg text-purple-600 dark:text-purple-300">
                {t("phone.label")}
              </p>
              <a
                href={t("phone.href")}
                className="flex items-center gap-2 text-2xl font-semibold transition duration-300 hover:text-gray-600 dark:hover:text-gray-400"
              >
                {t("phone.display")}
                <span className="text-purple-600 dark:text-purple-500">↗</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-purple-600 dark:text-purple-300">
                {t("email.label")}
              </p>
              <a
                href={t("email.href")}
                className="flex items-center gap-2 text-3xl font-semibold transition duration-300 hover:text-gray-600 lg:text-4xl dark:hover:text-gray-400"
              >
                {t("email.display")}
                <span className="text-purple-600 dark:text-purple-500">↗</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-purple-600 dark:text-purple-300">
                {t("office.label")}
              </p>
              <address className="text-xl leading-relaxed text-gray-700 not-italic dark:text-gray-300">
                {t("office.line1")}
                <br />
                {t("office.line2")}
                <br />
                {t("office.line3")}
                <br />
              </address>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="h-full min-h-[400px] w-full overflow-hidden rounded-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63450.954117663314!2d107.90958060148138!3d-6.305101383051063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e694e81a2f8895f%3A0xf5942b441482d61!2sKec.%20Sukra%2C%20Kabupaten%20Indramayu%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1755592235095!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
