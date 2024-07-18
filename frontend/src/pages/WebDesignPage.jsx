// src/components/WebDesignPage.js

import React from "react";
import { Footer } from "../Components/Footer";
import { FooterAnimation } from "../Components/FooterAnimation";

const WebDesignPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <h2 className="text-zinc-400 font-lg text-2xl mt-20">
        Web Design Services
      </h2>
      <br />
      <p className="text-zinc-400 font-light text-lg">
        At AJ Solutions, our web design services focus on creating visually appealing and user-friendly websites. We combine creativity with technology to deliver websites that not only look great but also provide a seamless user experience.
      </p>
      <br />
      <p className="text-zinc-400 font-light text-lg pb-4">
        Our team of web designers works closely with you to understand your brand and business objectives. From initial concept to final launch, we ensure that your website reflects your brand identity and meets your business goals.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Responsive Design:</span> Our websites are designed to provide an optimal viewing experience across all devices.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">User Experience:</span> We focus on creating websites that are easy to navigate and provide a positive user experience.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        <span className="font-bold">Brand Identity:</span> Our designs reflect your brand identity and help you stand out in the digital landscape.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        At AJ Solutions, we follow a comprehensive approach to web design: Discovery, Design, Development, Testing & Launch.
      </p>

      <FooterAnimation />
      <Footer />
    </div>
  );
};

export default WebDesignPage;
