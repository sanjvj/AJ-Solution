import React, { useState } from 'react';
import { Cardgrid } from "./Cardgrid"
import { CardListGrid } from './CardListGrid';
import { Footer } from './Footer';
import { Form } from './Form';
import { Testimonials } from './Testimonials';
import {motion} from "framer-motion";
const container = (delay) =>({
    hidden : {x: -100,opacity: 0},
    visible: {
        x:0,
        opacity:1,
        transition: {duration:1,delay:delay}
    }
})
export function Main() {
    
    return (
        <div className="flex flex-col w-1/2 items-center text-left mx-auto">
            <motion.h1  initial={{y:-100,opacity:0}}
            animate= {{y:0,opacity:1}}
            transition={{duration:1,delay:1}}
             className="text-2xl md:text-4xl lg:text-5xl mt-10 text-center">Best <span className='bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text'> Website Designing Company</span> in Coimbatore</motion.h1><br></br>
            <motion.p variants={container(1.5)} initial="hidden"
            animate= "visible" className='text-gray-200'>Welcome to AJ Solutions, your premier destination for web design services that enhance your digital presence and deliver results. Our experienced team of web designers combines expertise and creativity to craft visually stunning websites that captivate visitors and perform exceptionally well in search engine rankings. We prioritize user experience, staying attuned to modern design trends, and adhering to the latest SEO guidelines.</motion.p><br></br>
           <motion.p variants={container(2)} initial="hidden"
            animate= "visible" className='text-gray-200'> We offer comprehensive web design and development solutions, including responsive designs that function seamlessly on all devices. Our expertise extends beyond websites to encompass ecommerce platforms, CMS integration, and custom web applications. We work closely with you, maintaining open communication and transparency throughout the process, to ensure your unique vision is realized.</motion.p><br></br>
            <br></br><motion.p variants={container(2.5)} initial="hidden"
            animate= "visible" className='text-gray-200'>At AJ Solutions, we’re committed to turning your ideas into a compelling online presence that not only looks great but also functions flawlessly. Explore our portfolio to see our past projects, and contact us to start a conversation about your specific needs. We’re here to empower your business and help you reach your digital goals, providing a website that drives traffic, engages users, and converts leads into loyal customers. Let’s take the first step toward building a powerful online presence together.</motion.p><br></br>
            <motion.button variants={container(3)} initial="hidden"
            animate= "visible" className="rounded-md bg-gradient-to-r from-red-500 to-purple-500 px-4 py-1">Know More</motion.button>

            <hr className="w-48 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700"></hr>


            
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:100}}
            transition={{duration:1}}
             className="text-4xl">Our <span className='bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text'>Service</span></motion.h1><br></br>
            <motion.p
           whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:100}}
            transition={{duration:1}}
             className='text-center mb-10 text-gray-200'>With latest technology we are offering service such as Web Design, Web Development, Mobile App Development, Branding Designs & Digital Marketing</motion.p>
           
           
           
           
            <Cardgrid />
            <Form />
           

            <motion.hr whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}} className="w-48 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700"></motion.hr>



        <CardListGrid></CardListGrid>
        <Testimonials></Testimonials>
        <div className="inline-flex items-center justify-center w-full">
    <hr className="w-64 h-1 my-8 bg-gray-400 border-0 rounded dark:bg-gray-700"></hr>
    <motion.div whileInView={{opacity:1,x:-24}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}} className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
        <svg className="w-4 h-4 text-gray-00 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
    </motion.div>
</div>     
  
  <Footer></Footer>
        </div>
    );
}
