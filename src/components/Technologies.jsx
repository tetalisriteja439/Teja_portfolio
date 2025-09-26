import { SiPython, SiMysql, SiGooglecloud, SiPowerbi, SiMicrosoftexcel, SiTableau } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { FaGit, FaDatabase } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import {motion} from "framer-motion";
const iconVarients= (duration) => ({
    initial: {y:-10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        {/* Python */}
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-yellow-400" />
        </motion.div>
        {/* SQL removed */}
        {/* MySQL */}
        <motion.div
          variants={iconVarients(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-700" />
        </motion.div>
        {/* Google Cloud */}
        <motion.div
          variants={iconVarients(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGooglecloud className="text-7xl text-sky-700" />
        </motion.div>
        {/* Google Cloud removed */}
        {/* Git */}
        <motion.div
          variants={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGit className="text-7xl text-red-500" />
        </motion.div>
        {/* Database */}
        <motion.div
          variants={iconVarients(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDatabase className="text-7xl text-green-700" />
        </motion.div>
        {/* AI/ML/Data Science */}
        <motion.div
          variants={iconVarients(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiOpenai className="text-7xl text-purple-600" />
        </motion.div>
        {/* Microsoft Excel */}
        <motion.div
          variants={iconVarients(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMicrosoftexcel className="text-7xl text-green-600" />
        </motion.div>
        {/* Power BI */}
        <motion.div
          variants={iconVarients(8.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPowerbi className="text-7xl text-yellow-600" />
        </motion.div>
        {/* Tableau */}
        <motion.div
          variants={iconVarients(8.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTableau className="text-7xl text-blue-400" />
        </motion.div>
        {/* TensorFlow removed */}
        {/* Pandas removed */}
        {/* scikit-learn removed */}
      </motion.div>
    </div>
  );
};

export default Technologies;
