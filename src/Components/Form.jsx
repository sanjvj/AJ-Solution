import { useState } from "react";
import {motion} from "framer-motion"

export function Form(){
    const [selectedService, setSelectedService] = useState('Web Development');
    const [isOpen, setIsOpen] = useState(false);

    const services = [
        'Web Design',
        'Web Development',
        'Mobile App Development',
        'Branding Designs',
        'Digital Marketing',
        'Logo Design',
        'Brochure Design',
        'SEO'
    ];

    const handleSelect = (service) => {
        setSelectedService(service);
        setIsOpen(false);
    };

    return <div>
         <hr className="w-48 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700"></hr>


          <div className="grid grid-cols-12 gap-4 mt-8">
           <div className="col-span-12 lg:col-span-6 text-left">
        <motion.h1 whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}} className="text-xl font-semibold">Why Choose AJ Solutions Website Design Company Coimbatore?</motion.h1><br></br>
        <motion.p whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}} className='text-gray-300'>Choosing AJ Solutions Website Design Company in Coimbatore is the smart decision to enhance your online presence. Our team of experts specializes in crafting stunning and user-friendly websites that are not only visually appealing but also perform exceptionally well in search engine rankings.</motion.p>
        <br></br>
        <motion.p whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}} className='text-gray-300'>We understand the critical role that web design plays in attracting and retaining customers. That’s why we offer tailored solutions to suit your unique business needs. Whether you’re a local business in Coimbatore or aiming for a global audience, our services are designed to help you stand out in the digital crowd.</motion.p>
        <br></br>
        <motion.p whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}} className='text-gray-300'>Our comprehensive approach covers all aspects of web design and development, ensuring your website is optimized for success. With a focus on creativity and functionality, we create websites that leave a lasting impression on your visitors.</motion.p>
        <br></br>
        <motion.p whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}} className='text-gray-300'>If you’re ready to take your online presence to the next level, AJ Solutions is your trusted partner. Contact us today for innovative web design solutions.</motion.p>
        <motion.p whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}} className='text-gray-300'>#1 Top Web Design Companies in Coimbatore</motion.p>
    </div>
    <div className="col-span-12 lg:col-span-6">
        <motion.form whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}} className="border border-gray-300 rounded-lg p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="customerName">Customer Name</label>
                    <input className="w-full text-black border border-slate-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" type="text" id="customerName" name="customerName" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="whatsappNumber">Whatsapp Number</label>
                    <input className="w-full text-black border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" type="text" id="whatsappNumber" name="whatsappNumber" required />
                </div>
            </div>
            <motion.div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="emailId">Email Id</label>
                    <input className="w-full text-black border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" type="email" id="emailId" name="emailId" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="city">City</label>
                    <input className="w-full text-black border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" type="text" id="city" name="city" required />
                </div>
            </motion.div>
            <div className="mb-4 relative">
                <label className="block text-sm font-medium mb-2" htmlFor="preferredService">Choose Your Preferred Service</label>
                <div className="grid grid-cols-4 gap-16 w-full border border-gray-300 rounded-md p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500" onClick={() => setIsOpen(!isOpen)}>
                    <div className='col-span-3'>{selectedService} </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

                </div>
                {isOpen && (
                    <ul className="absolute w-full border border-gray-300 rounded-md mt-1 bg-black shadow-lg">
                        {services.map(service => (
                            <li key={service} className={`p-2 hover:bg-purple-500 hover:text-white cursor-pointer ${service === selectedService ? 'bg-purple-500 text-white' : ''}`} onClick={() => handleSelect(service)}>
                                {service}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="mb-4">
                <label className="block  text-sm font-medium mb-2" htmlFor="shortNote">Short Note About What You Require</label>
                <textarea className="w-full text-black   border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" id="shortNote" name="shortNote" rows="4" required></textarea>
            </div>
            <button className="w-full bg-purple-500 text-white rounded-md p-2 hover:bg-purple-700" type="submit">Send Message</button>
        </motion.form>
    </div>
  </div><br></br>
</div>
}