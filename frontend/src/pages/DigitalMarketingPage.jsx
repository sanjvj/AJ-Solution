// src/components/DigitalMarketingPage.js

import React from "react";
import { Footer } from "../Components/Footer";
import { FooterAnimation } from "../Components/FooterAnimation";
import { Topbar } from "../Components/Topbar";

const DigitalMarketingPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <Topbar />
      <h2 className="text-zinc-400 font-lg text-2xl mt-20">
        Digital Marketing Services
      </h2>
      <br />
      <p className="text-zinc-400 font-light text-lg">
        At AJ Solutions, our digital marketing services are designed to help you reach your target audience and achieve your marketing goals. We use a data-driven approach to develop effective marketing strategies that drive engagement and conversions.
      </p>
      <br />
      <p className="text-zinc-400 font-light text-lg pb-4">
        Our team of digital marketing experts works closely with you to understand your business objectives and create customized campaigns. From SEO to social media marketing, we provide comprehensive solutions that deliver results.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Search Engine Optimization:</span> We optimize your website to improve its visibility on search engines and drive organic traffic.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Social Media Marketing:</span> We create engaging social media campaigns that increase your brand's reach and engagement.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        <span className="font-bold">Content Marketing:</span> Our content strategies help you attract and retain your target audience with valuable and relevant content.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        At AJ Solutions, we follow a comprehensive approach to digital marketing: Strategy Development, Campaign Execution, Monitoring & Optimization.
      </p>

      <FooterAnimation />
      <Footer />
    </div>
  );
};

export default DigitalMarketingPage;
