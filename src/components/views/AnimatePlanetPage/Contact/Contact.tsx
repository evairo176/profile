"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[1200px] px-4 py-32 text-gray-800 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid gap-16 lg:grid-cols-2"
      >
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl font-bold text-gray-600 dark:text-gray-300"
          >
            Get in{" "}
            <span className="text-purple-600 dark:text-purple-500">touch</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass space-y-8 rounded-2xl p-8"
          >
            <div className="space-y-2">
              <p className="text-lg text-purple-600 dark:text-purple-300">
                Phone
              </p>
              <a
                href="tel:+999999999"
                className="flex items-center gap-2 text-2xl font-semibold transition duration-300 hover:text-gray-600 dark:hover:text-gray-400"
              >
                +99 (0) 99 999 999
                <span className="text-purple-600 dark:text-purple-500">↗</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-purple-600 dark:text-purple-300">
                Email
              </p>
              <a
                href="mailto:john@doe.com"
                className="flex items-center gap-2 text-3xl font-semibold transition duration-300 hover:text-gray-600 lg:text-4xl dark:hover:text-gray-400"
              >
                john@doe.com
                <span className="text-purple-600 dark:text-purple-500">↗</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-purple-600 dark:text-purple-300">
                Office
              </p>
              <address className="text-xl leading-relaxed text-gray-700 not-italic dark:text-gray-300">
                Keizersgracht 520, 1017EK
                <br />
                Amsterdam
                <br />
                The Netherlands
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5788316086147!2d4.8906773!3d52.3660809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c19bcaa879%3A0x3b86a376ef9a0a98!2sKeizersgracht%20520%2C%201017%20EK%20Amsterdam!5e0!3m2!1sen!2snl!4v1647355453979!5m2!1sen!2snl"
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
