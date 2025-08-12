"use client";

import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="text-foreground/80 mx-auto max-w-[1200px] px-4 py-32"
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
            className="text-muted-foreground text-7xl font-bold"
          >
            Get in <span className="text-primary">touch</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass space-y-8 rounded-2xl p-8"
          >
            <div className="space-y-2">
              <p className="text-primary/80 text-lg">Phone</p>
              <a
                href="tel:+999999999"
                className="hover:text-muted-foreground flex items-center gap-2 text-2xl font-semibold transition duration-300"
              >
                +99 (0) 99 999 999
                <span className="text-primary">↗</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-primary text-lg">Email</p>
              <a
                href="mailto:john@doe.com"
                className="hover:text-muted-foreground flex items-center gap-2 text-2xl font-semibold transition duration-300 lg:text-4xl"
              >
                john@doe.com
                <span className="text-primary">↗</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-primary text-lg">Office</p>
              <address className="text-xl leading-relaxed not-italic">
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.5755766296606!2d106.83259359919738!3d-6.223811999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f30011873c35%3A0x74506679e0f21cfc!2sJinSei!5e0!3m2!1sid!2sid!4v1754988942542!5m2!1sid!2sid"
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
