import { motion } from "framer-motion";
export function AboutHero() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-32 gap-36 mb-52">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="col-span-2 lg:col-span-1"
        >
          <img className="rounded-lg" src="aboutintro.jpeg"></img>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="col-span-2 lg:col-span-1 flex flex-col justify-center"
        >
          <h1 className="text-4xl font-semibold pb-1">About Us</h1>
          <br></br>
          <p className="font-light text-lg text-gray-300 ">
            Website Design Coimbatore, Tamil Nadu, India we help our clients to
            fit with the wide reach of internet by designing & developing web
            solutions that help them to grow their products to a wider audience,
            therefore we has a vision to empower clients with wide range of
            marketing tools that help their business to go on.
          </p>
          <br></br>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-28 gap-36 mb-52">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="col-span-2 lg:col-span-1 flex flex-col justify-center"
        >
          <h1 className="text-4xl font-semibold pb-1">What We Do</h1>
          <br></br>
          <p className="font-light text-lg text-gray-300 ">
            We develop web applications, mobile applications, web design, online
            shopping websites, digital marketing & branding with the latest
            technologies.
          </p>
          <br></br>
          <p className="font-light text-lg text-gray-300 ">
            Most Importantly we aim to provide quality services to our customers
            in India & across globe, because our online services ensure that
            your website or mobile app stands out ahead of competition and
            remains digitally sound with time and technology.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="col-span-2 lg:col-span-1"
        >
          <img className="rounded-lg" src="about2.jpeg"></img>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-32 gap-36 mb-52">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="col-span-2 lg:col-span-1"
        >
          <img className="rounded-lg" src="vision.jpeg"></img>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="col-span-2 lg:col-span-1 flex flex-col justify-center"
        >
          <h1 className="text-4xl font-semibold pb-1">
            Our Vision at AJ Solutions
          </h1>
          <br></br>
          <p className="font-light text-lg text-gray-300 ">
            At AJ Solutions, we are dedicated to delivering the best online
            solutions for clients venturing into innovative technologies. Our
            goal is to help you generate more income through our services while
            ensuring timely delivery without compromising on quality. We take
            pride in our ability to create impactful digital solutions that
            cater to your unique needs and aspirations.
          </p>
          <br></br>
          <p className="font-light text-lg text-gray-300 ">
            Our passion lies in serving our clients with excellence and
            integrity. We are committed to assisting you in turning your dreams
            into reality by providing top-notch services in web development,
            design, and digital marketing. With our expertise and unwavering
            dedication, we strive to exceed your expectations and empower your
            business to thrive in the digital landscape.
          </p>
          <br></br>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-28 gap-36 ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="col-span-2 lg:col-span-1 flex flex-col justify-center"
        >
          <h1 className="text-4xl font-semibold pb-1">
            Our Mission at AJ Solutions
          </h1>
          <br></br>
          <p className="font-light text-lg text-gray-300 ">
            Our mission is to empower businesses by providing innovative,
            high-quality online solutions that drive growth and success. We
            leverage the latest technologies to create seamless, user-friendly,
            and visually compelling web experiences, ensuring each project
            exceeds client expectations.{" "}
          </p>
          <br></br>
          <p className="font-light text-lg text-gray-300 ">
            At AJ Solutions, we are passionate about building lasting
            relationships with our clients. We strive to understand your unique
            needs and goals, offering personalized support and guidance. Our
            dedication to excellence, integrity, and customer satisfaction is at
            the core of everything we do, working tirelessly to turn your vision
            into reality and help your business achieve its fullest potential.{" "}
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="col-span-2 lg:col-span-1"
        >
          <img className="rounded-lg" src="about2.jpeg"></img>
        </motion.div>
      </div>
    </div>
  );
}
