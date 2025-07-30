import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Work = ({ isDarkMode }) => (
  <motion.div
    id="work"
    className="w-full px-[12%] py-10 scroll-mt-20"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* ───── Headings ─────────────────────────────────────── */}
    <motion.h4
      className="text-center mb-2 text-lg font-Ovo"
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      My portfolio
    </motion.h4>

    <motion.h2
      className="text-center text-5xl font-Ovo"
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      My latest work
    </motion.h2>

    <motion.p
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      Welcome to my web development portfolio! Explore a collection of projects
      showcasing my expertise in front-end development.
    </motion.p>

    {/* ───── Project grid ─────────────────────────────────── */}
    <motion.div
      className="grid grid-cols-auto my-10 gap-5 dark:text-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
    >
      {workData.map((project, index) => (
        <a
          key={index}
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="aspect-square bg-cover bg-center bg-no-repeat rounded-lg relative"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* overlay */}
            <div
              className="absolute inset-x-1/2 translate-x-[-50%] bottom-5
                         w-[88%] bg-white rounded-lg px-6 py-4
                         flex items-start gap-4 group-hover:bottom-7
                         transition-all duration-300"
            >
              <div className="flex-1">
                <h3 className="font-semibold leading-snug break-words">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 break-words">
                  {project.description}
                </p>
              </div>

              <div
                className="flex-shrink-0 w-10 h-10 rounded-full border border-black
                           flex items-center justify-center
                           shadow-[2px_2px_0_#000] bg-white
                           hover:bg-lime-300 transition-colors"
              >
                <Image
                  src={assets.send_icon}
                  alt="Open repo"
                  className="w-4 h-4"
                />
              </div>
            </div>
          </motion.div>
        </a>
      ))}
    </motion.div>

    {/* ───── GitHub CTA ───────────────────────────────────── */}
    <motion.a
      href="https://github.com/HimDahiya"
      className="w-max flex items-center justify-center gap-2 text-gray-700
                 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20
                 hover:bg-lightHover duration-500 dark:text-white dark:border-white
                 dark:hover:bg-darkHover"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.5 }}
    >
      Show more
      <Image
        src={
          isDarkMode
            ? assets.right_arrow_bold_dark
            : assets.right_arrow_bold
        }
        alt="Right arrow"
        className="w-4"
      />
    </motion.a>
  </motion.div>
);

export default Work;
