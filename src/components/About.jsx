//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

import about from "../assets/about.png";
import about2 from "../assets/about2.png";

const About = () => {
  return (
    <div
      className="md:px-14 p-4 max-w-screen-2xl mx-auto space-y-10"
      id="about"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={about} alt="Image 2" />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            Issu <span className="text-secondary">de longues années</span> de
            recherche
          </h2>
          <p className="text-tertiary text-lg mb-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            quaerat nemo voluptas dolores quidem corporis consequatur, quas
            doloribus temporibus, et quis doloremque repellat aliquid
            consequuntur neque veritatis autem cum debitis?
          </p>
          <button className="btnPrimary">Démarrer</button>
        </motion.div>
      </div>
      {/* Deuxieme partie */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={about2} alt="Image 3" />
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            Pratiquez <span className="text-secondary">à votre rythme</span>
          </h2>
          <p className="text-tertiary text-lg mb-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            quaerat nemo voluptas dolores quidem corporis consequatur, quas
            doloribus temporibus, et quis doloremque repellat aliquid
            consequuntur neque veritatis autem cum debitis?
          </p>
          <button className="btnPrimary">Démarrer</button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
