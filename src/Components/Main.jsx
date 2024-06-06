import React, { useState } from "react";
import { Cardgrid } from "./Cardgrid";
import { CardListGrid } from "./CardListGrid";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { Testimonials } from "./Testimonials";
import { motion } from "framer-motion";
import { FooterAnimation } from "./FooterAnimation";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});
export function Main() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
        className=" text-2xl md:text-4xl lg:text-6xl mt-10 text-center font-normal"
      >
        Best{" "}
        <span className="bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text">
          {" "}
          Website Designing Company
        </span>{" "}
        in Coimbatore
      </motion.h1>
      <br></br>
      <motion.p
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className=" text-zinc-400 font-light text-base"
      >
        Welcome to AJ Solutions, your premier destination for web design
        services that enhance your digital presence and deliver results. Our
        experienced team of web designers combines expertise and creativity to
        craft visually stunning websites that captivate visitors and perform
        exceptionally well in search engine rankings. We prioritize user
        experience, staying attuned to modern design trends, and adhering to the
        latest SEO guidelines.
      </motion.p>
      <br></br>
      <motion.p
        variants={container(1)}
        initial="hidden"
        animate="visible"
        className="text-zinc-400 font-light text-base"
      >
        {" "}
        We offer comprehensive web design and development solutions, including
        responsive designs that function seamlessly on all devices. Our
        expertise extends beyond websites to encompass ecommerce platforms, CMS
        integration, and custom web applications. We work closely with you,
        maintaining open communication and transparency throughout the process,
        to ensure your unique vision is realized.
      </motion.p>
      <br></br>
      <br></br>
      <motion.p
        variants={container(1.5)}
        initial="hidden"
        animate="visible"
        className="text-zinc-400 font-light text-base pb-4"
      >
        At AJ Solutions, we’re committed to turning your ideas into a compelling
        online presence that not only looks great but also functions flawlessly.
        Explore our portfolio to see our past projects, and contact us to start
        a conversation about your specific needs. We’re here to empower your
        business and help you reach your digital goals, providing a website that
        drives traffic, engages users, and converts leads into loyal customers.
        Let’s take the first step toward building a powerful online presence
        together.
      </motion.p>
      <br></br>
      <motion.button
        variants={container(2)}
        initial="hidden"
        animate="visible"
        className="rounded-md bg-gradient-to-r from-red-500 to-purple-500 px-4 py-1 font-semibold"
      >
        Know More
      </motion.button>

      <hr className="w-48 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="text-5xl font-normal"
      >
        Our{" "}
        <span className="bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text">
          Service
        </span>
      </motion.h1>
      <br></br>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="text-center mb-10 text-gray-300 text-lg font-light"
      >
        With latest technology we are offering service such as Web Design, Web
        Development, Mobile App Development, Branding Designs & Digital
        Marketing
      </motion.p>

      <Cardgrid />
      <Form />

      <motion.hr
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="w-48 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700"
      ></motion.hr>

      <CardListGrid></CardListGrid>
      <Testimonials></Testimonials>
      <FooterAnimation></FooterAnimation>
    </div>
  );
}
