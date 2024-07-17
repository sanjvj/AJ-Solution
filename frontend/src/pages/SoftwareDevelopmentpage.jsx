// src/components/SoftwareDevelopmentPage.js

import React from "react";
import { Footer } from "../Components/Footer";
import { FooterAnimation } from "../Components/FooterAnimation";

const SoftwareDevelopmentpage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <h2 className="text-zinc-400 font-lg text-2xl mt-20">
        Software Development Services
      </h2>
      <br />
      <p className="text-zinc-400 font-light text-lg">
        At AJ Solutions, our software development services are designed to deliver high-quality, scalable, and secure software solutions that meet your business needs. We leverage the latest technologies and best practices to develop custom software tailored to your unique requirements.
      </p>
      <br />
      <p className="text-zinc-400 font-light text-lg pb-4">
        Our team of experienced developers and engineers work closely with you to ensure that the software we create not only meets but exceeds your expectations. From initial consultation to final deployment, we are committed to delivering solutions that drive efficiency and innovation.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Custom Software Development:</span> We build software that is specifically designed to address your business challenges and goals.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Scalability:</span> Our solutions are designed to scale with your business, ensuring long-term value and adaptability.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        <span className="font-bold">Integration:</span> We ensure seamless integration of new software with your existing systems and processes.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        At AJ Solutions, we follow a comprehensive approach to software development: Requirement Analysis, Design & Prototyping, Development, Testing & Deployment.
      </p>

      <FooterAnimation />
      <Footer />
    </div>
  );
};

export default SoftwareDevelopmentpage;
