import React from "react";
import {motion} from 'framer-motion';
export function Service() {
  return (
    <>
      <motion.div variants={{
        hidden : {opacity:0},
        show: {
          
          opacity:1,
          
          transition:{
            animate : 0.25,
            staggerChildren: 0.4,
            duration:1.25,
          },

        },
      }}
      initial = 'hidden'
      
      whileInView = 'show'
       className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 px-32">
        <motion.div 
        variants={{hidden:{opacity:0},show:{opacity:1}}}
         className="col-span-1 mb-9 rounded-[20px] bg-purple-200 p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            "Web Development"
          </h4>
          <p className="text-body-color dark:text-dark-6">
            "We specialize in creating custom websites that are visually
            appealing, user-friendly, and fully responsive.
          </p>
        </motion.div>

        <motion.div variants={{hidden:{opacity:0},show:{opacity:1}}}
         className="col-span-1 mb-9 rounded-[20px] bg-purple-200 p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            "Web Design"
          </h4>
          <p className="text-body-color dark:text-dark-6">
            Our web design services focus on creating visually stunning designs
            that reflect your 
          </p>
        </motion.div>

        <motion.div variants={{hidden:{opacity:0},show:{opacity:1}}}
         className="col-span-1 mb-9 rounded-[20px] bg-purple-200 p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            Search Engine Optimization (SEO):
          </h4>
          <p className="text-body-color dark:text-dark-6">
            Boost your online visibility with our comprehensive SEO services.
          </p>
        </motion.div>

        <motion.div variants={{hidden:{opacity:0},show:{opacity:1}}}
         className="col-span-1 mb-9 rounded-[20px] bg-purple-200 p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            E-commerce Solutions
          </h4>
          <p className="text-body-color dark:text-dark-6">
            Transform your business with a robust e-commerce platform. We build
            secure, scalable, and user-friendly online stores that offer a
            seamless shopping experience.
          </p>
        </motion.div>

        <motion.div variants={{hidden:{opacity:0},show:{opacity:1}}}
         className="col-span-1 mb-9 rounded-[20px] bg-purple-200 p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            2D Animation
          </h4>
          <p className="text-body-color dark:text-dark-6">
            Capture your audience’s attention with engaging explainer videos.
            Our 2D animation services simplify complex concepts and present them
            in an easy-to-understand format.
          </p>
        </motion.div>

        <motion.div variants={{hidden:{opacity:0},show:{opacity:1}}}
         className="col-span-1 mb-9 rounded-[20px] bg-purple-200 p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            Mobile Application Development
          </h4>
          <p className="text-body-color dark:text-dark-6">
            Reach your customers on their favorite devices with our mobile app
            development services. We build high-performance apps for both iOS
            and Android platforms, tailored to your business needs.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}
