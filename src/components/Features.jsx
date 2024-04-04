//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

import featureCardImg from "../assets/featureCardImg.png";

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="lg:w-1/4"
        >
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Pourquoi nous sommes meilleurs ?
          </h3>
          <p className="text-base text-tertiary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
            omnis accusantium consectetur laborum dolorum blanditiis! Aspernatur
            architecto deserunt cum, autem tempora itaque enim est doloribus
            quas quam voluptatum quo mollitia.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full lg:w-3/4"
        >
          <div className="grid md:grid-cols-3 sm:grid-cols-1 items-start md:gap-12 gap-8">
            <div className="bg-card rounded-[35px] h-96 shadow-3xl p-8 flex items-center justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
              <div className="">
                <img src={featureCardImg} alt="Image" />
                <h5 className="text-2xl font-semibold text-primary text-center px-4 mt-5">
                  Un programme adapté à votre planning
                </h5>
              </div>
            </div>
            <div className="bg-card rounded-[35px] h-96 shadow-3xl p-8 flex items-center justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
              <div className="">
                <img src={featureCardImg} alt="Image" />
                <h5 className="text-2xl font-semibold text-primary text-center px-4 mt-5">
                  Un programme adapté à votre planning
                </h5>
              </div>
            </div>
            <div className="bg-card rounded-[35px] h-96 shadow-3xl p-8 flex items-center  justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
              <div className="">
                <img src={featureCardImg} alt="Image" />
                <h5 className="text-2xl font-semibold text-primary text-center px-4 mt-5">
                  Un programme adapté à votre planning
                </h5>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
