import { useState } from "react";
import { motion } from "framer-motion";

export function Form() {
  const [selectedService, setSelectedService] = useState("Web Development");
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    "Web Design",
    "Web Development",
    "Mobile App Development",
    "Branding Designs",
    "Digital Marketing",
    "Logo Design",
    "Brochure Design",
    "SEO",
  ];

  const handleSelect = (service) => {
    setSelectedService(service);
    setIsOpen(false);
  };

  return (
    <div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

      <div className="grid grid-cols-12 gap-4 mt-8">
        <div className="col-span-12 lg:col-span-6 text-left">
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-xl font-semibold"
          >
            Why Choose AJ Solutions Website Design Company Coimbatore?
          </motion.h1>
          <br></br>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-gray-400 font-medium text-sm"
          >
            Customer-Centric Approach: We prioritize your needs and work
            collaboratively to ensure your success. Our solutions are designed
            with your business goals in mind.
          </motion.p>
          <br></br>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-gray-400 font-medium text-sm"
          >
            Innovative Technology: We leverage the latest technologies and
            industry best practices to deliver solutions that are not only
            effective but also future-proof.
          </motion.p>
          <br></br>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-gray-400 font-medium text-sm"
          >
            Experienced Team: Our team of IT professionals brings a wealth of
            knowledge and expertise to every project. We are committed to
            delivering excellence in everything we do.
          </motion.p>
          <br></br>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-gray-400 font-medium text-sm"
          >
            Reliability and Security: Trust and security are at the core of our
            services. We implement rigorous security measures to protect your
            data and ensure the reliability of our solutions
          </motion.p>
          <br></br>{" "}
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-gray-400 font-medium text-sm"
          >
            At AJ SOLUTIONS, we believe in the power of technology to transform
            businesses. Our mission is to help you navigate the digital
            landscape with confidence and achieve your strategic objectives.
            Partner with us to unlock the full potential of your business
            through innovative IT solutions.
          </motion.p>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <motion.form
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="border border-gray-300 rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="customerName"
                >
                  Customer Name
                </label>
                <input
                  className="w-full text-black border bg-gray-200 border-slate-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  type="text"
                  id="customerName"
                  name="customerName"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="whatsappNumber"
                >
                  Whatsapp Number
                </label>
                <input
                  className="w-full text-black border bg-gray-200 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  type="text"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  required
                />
              </div>
            </div>
            <motion.div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="emailId"
                >
                  Email Id
                </label>
                <input
                  className="w-full text-black border bg-gray-200 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  type="email"
                  id="emailId"
                  name="emailId"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  className="w-full text-black border bg-gray-200 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  type="text"
                  id="city"
                  name="city"
                  required
                />
              </div>
            </motion.div>
            <div className="mb-4 relative">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="preferredService"
              >
                Choose Your Preferred Service
              </label>
              <div
                className="grid grid-cols-4 gap-16 w-full border text-black bg-gray-200 border-gray-300 rounded-md p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="col-span-3">{selectedService} </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              {isOpen && (
                <ul className="absolute w-full border  border-gray-300 rounded-md mt-1 bg-black shadow-lg">
                  {services.map((service) => (
                    <li
                      key={service}
                      className={`p-2  hover:bg-purple-500 hover:text-white cursor-pointer ${
                        service === selectedService
                          ? "bg-purple-500 text-white"
                          : ""
                      }`}
                      onClick={() => handleSelect(service)}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block  text-sm font-medium mb-2"
                htmlFor="shortNote"
              >
                Short Note About What You Require
              </label>
              <textarea
                className="w-full text-black   border bg-gray-300 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="shortNote"
                name="shortNote"
                rows="4"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full bg-purple-500 text-white rounded-md p-2 hover:bg-purple-700"
              type="submit"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
      <br></br>
    </div>
  );
}
