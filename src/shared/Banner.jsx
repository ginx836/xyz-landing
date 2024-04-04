//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = ({ banner, heading, subheading, btn1, btn2 }) => {
  return (
    <div>
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
          {/* banner content  */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-3/5"
          >
            <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
              {heading}
            </h2>
            <p className="text-[#EBEBEB] text-2xl mb-8">{subheading}</p>
            <div className="space-x-5 space-y-4">
              {btn1 ? <button className="btnPrimary">{btn1}</button> : null}
              {btn2 ? <button className="btnPrimary">{btn2}</button> : null}
            </div>
          </motion.div>
          {/* banner image */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            {banner ? (
              <img
                src={banner}
                alt="banner"
                className="lg-h-[351px] w-[407px]"
              />
            ) : null}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
