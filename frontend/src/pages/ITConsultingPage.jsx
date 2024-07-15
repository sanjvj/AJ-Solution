// src/components/ITConsultingPage.js

import React from "react";
import { Footer } from "../Components/Footer";
import { FooterAnimation } from "../Components/FooterAnimation";

const ITConsultingPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <h2 className="text-zinc-400 font-lg text-2xl mt-20">
        IT Consulting Services
      </h2>
      <br />
      <p className="text-zinc-400 font-light text-lg">
        At AJ Solutions, our IT consulting services are designed to help you leverage technology to achieve your business objectives. We provide expert guidance and strategic planning to ensure that your IT infrastructure aligns with your goals.
      </p>
      <br />
      <p className="text-zinc-400 font-light text-lg pb-4">
        Our team of IT consultants works closely with you to understand your unique needs and develop customized solutions. From technology selection to implementation, we are dedicated to helping you maximize the value of your IT investments.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Strategic Planning:</span> We help you develop a roadmap for leveraging technology to achieve your business goals.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Technology Selection:</span> Our experts assist you in selecting the right technologies for your needs.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        <span className="font-bold">Implementation:</span> We ensure smooth implementation and integration of new technologies into your existing systems.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        At AJ Solutions, we follow a comprehensive approach to IT consulting: Needs Assessment, Strategy Development, Implementation, Optimization & Support.
      </p>

      <FooterAnimation />
      <Footer />
    </div>
  );
};

export default ITConsultingPage;
