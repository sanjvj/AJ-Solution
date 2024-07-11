// src/components/MobileAppDevelopmentPage.js

import React from "react";
import { Footer } from "../Components/Footer";
import { FooterAnimation } from "../Components/FooterAnimation";
import { Topbar } from "../Components/Topbar";

const Mobile = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <Topbar />
      <h2 className="text-zinc-400 font-lg text-2xl mt-20">
        Mobile App Development Services
      </h2>
      <br />
      <p className="text-zinc-400 font-light text-lg">
        At AJ Solutions, we excel in creating innovative and high-quality mobile applications designed to meet your business needs and exceed your expectations. Our experienced team of developers and designers work closely with you to deliver seamless mobile experiences across various platforms.
      </p>
      <br />
      <p className="text-zinc-400 font-light text-lg pb-4">
        We offer comprehensive mobile app development services, including native and hybrid app development, to ensure your app performs optimally on both iOS and Android devices. Our solutions are tailored to enhance user engagement and drive business growth.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Cross-Platform Development:</span> Our expertise in cross-platform development ensures that your app delivers a consistent experience across different devices and operating systems.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">User-Centric Design:</span> We focus on creating intuitive and engaging interfaces that provide an exceptional user experience.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Scalability:</span> Our apps are designed to scale with your business, accommodating future growth and new features.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        <span className="font-bold">Security:</span> We prioritize the security of your app, implementing robust security measures to protect user data and ensure compliance with industry standards.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        At AJ Solutions, we follow a comprehensive approach to mobile app development: Requirement Analysis, Design & Prototyping, Development, Testing & Deployment.
      </p>

      <FooterAnimation />
      <Footer />
    </div>
  );
};

export default Mobile;
