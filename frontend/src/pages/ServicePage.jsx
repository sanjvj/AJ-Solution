import React from "react";
import { Footer } from "../Components/Footer";
import { FooterAnimation } from "../Components/FooterAnimation";

const ServicePage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <h2 className="text-zinc-400 font-lg text-2xl mt-20">
        Web Development Services
      </h2>
      <br></br>
      <p className="text-zinc-400 font-light text-lg">
        At AJ Solutions, we specialize in a diverse range of digital services
        tailored to meet the dynamic needs of modern businesses. With expertise
        spanning multiple domains, we ensure your business not only survives but
        thrives in today's competitive landscape. Our focus includes crafting
        visually striking and functional websites through web designing, while
        our UI design team creates intuitive interfaces that reflect your brand
        identity.
      </p>
      <br></br>
      <p className="text-zinc-400 font-light text-lg pb-4">
        In addition to strong web and UI design capabilities, we excel in
        developing cohesive branding strategies to enhance and establish your
        brand's market presence. Our expertise extends to building robust
        ecommerce platforms that drive sales and deliver seamless shopping
        experiences. Whether you need native or hybrid mobile applications, our
        mobile app development team delivers solutions tailored to various
        platforms and user preferences.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Increased Reach:</span> A well-designed
        website helps you reach a global audience, making your business
        accessible to anyone, anywhere.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Enhanced User Experience:</span> Our focus
        on user-centric design ensures that visitors have a positive and
        engaging experience on your site.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Improved SEO:</span> Our websites are
        optimized for search engines, helping you rank higher and attract more
        organic traffic.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        <span className="font-bold">Scalability:</span> Whether you need a
        simple brochure site or a complex e-commerce platform, our solutions are
        scalable to grow with your business.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        At AJ Solutions, we
        follow a comprehensive approach to web development: Consultation &
        Planning, Design & Prototyping, Development, Testing & Launch."
      </p>

      <FooterAnimation></FooterAnimation>
      <Footer></Footer>
    </div>
  );
};

export default ServicePage;
