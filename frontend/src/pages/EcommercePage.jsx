// src/components/EcommercePage.js

import React from "react";
import { Footer } from "../Components/Footer";
import { FooterAnimation } from "../Components/FooterAnimation";
import { Topbar } from "../Components/Topbar";

const EcommercePage = () => {
  return (
    <div>
    <Topbar />
    
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      
      <h2 className="text-zinc-400 font-lg text-2xl mt-20">
        E-commerce Services
      </h2>
      <br />
      <p className="text-zinc-400 font-light text-lg">
        At AJ Solutions, our e-commerce services are designed to help you build and grow your online store. We provide end-to-end solutions that cover everything from website development to digital marketing, ensuring a seamless and successful e-commerce experience.
      </p>
      <br />
      <p className="text-zinc-400 font-light text-lg pb-4">
        Our team of e-commerce experts works closely with you to understand your business needs and create a customized solution. From product listing to payment integration, we take care of all the technical aspects, so you can focus on growing your business.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Online Store Development:</span> We create user-friendly and visually appealing e-commerce websites.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Payment Integration:</span> Our solutions ensure secure and seamless payment processing for your customers.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        <span className="font-bold">Digital Marketing:</span> We provide digital marketing services to drive traffic and sales to your online store.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        At AJ Solutions, we follow a comprehensive approach to e-commerce: Store Setup, Product Management, Payment Integration, Marketing & Support.
      </p></div>

      <FooterAnimation />
      <Footer />
    </div>
  );
};

export default EcommercePage;
