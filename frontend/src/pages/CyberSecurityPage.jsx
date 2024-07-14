// src/components/CyberSecurityPage.js

import React from "react";
import { Footer } from "../Components/Footer";
import { FooterAnimation } from "../Components/FooterAnimation";

const CyberSecurityPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">

      <h2 className="text-zinc-400 font-lg text-2xl mt-20">
        Cyber Security Services
      </h2>
      <br />
      <p className="text-zinc-400 font-light text-lg">
        At AJ Solutions, our cyber security services are designed to protect your business from evolving threats and ensure the safety of your digital assets. We leverage advanced technologies and industry best practices to provide comprehensive security solutions.
      </p>
      <br />
      <p className="text-zinc-400 font-light text-lg pb-4">
        Our team of cyber security experts works closely with you to develop and implement strategies that safeguard your data and infrastructure. From threat assessment to incident response, we are committed to protecting your business from cyber attacks.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Threat Assessment:</span> We identify and evaluate potential security risks to your business.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Data Protection:</span> Our solutions ensure the confidentiality, integrity, and availability of your data.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        <span className="font-bold">Incident Response:</span> We provide rapid and effective response to security incidents to minimize impact.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        At AJ Solutions, we follow a comprehensive approach to cyber security: Risk Assessment, Strategy Development, Implementation, Monitoring & Response.
      </p>

      <FooterAnimation />
      <Footer />
    </div>
  );
};

export default CyberSecurityPage;
