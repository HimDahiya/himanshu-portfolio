import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
      <motion.h4 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo'>
        Introduction</motion.h4>

      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-Ovo'>
        About me</motion.h2>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                   className="mt-10 md:mt-0  w-64 sm:w-80 md:w-5/12 flex-shrink-0 rounded-3xl">
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            className='flex-1'>
                  <p className='mb-10 max-w-2xl font-Ovo'>
                      Data-driven Business&nbsp;Analyst who turns raw data into  
                      <strong> actionable insight and automated outcomes</strong>.  
                      I architect cloud pipelines (Snowflake · AWS Redshift), design KPI
                      frameworks, and build <strong>AI/ML agents</strong> that replace manual
                      reporting and shrink decision cycles from days to minutes.  
                      Master’s-qualified, ITIL-4-certified, and trusted by stakeholders from
                      Ops teams to C-suite to deliver insight-driven execution at scale.
                  </p>
              
                <motion.ul
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay: 1}}
                className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <motion.li 
                        whileHover={{scale: 1.05}}
                        className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                         key={index}>
                            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80 whitespace-pre-line'>{description}</p>
                           {/*original-- no new line for btech <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>*/}
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.h4
                initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className='my-8 text-center text-2xl font-Ovo text-gray-700 dark:text-white/80'>My Build Kit</motion.h4>
                
                {/*<motion.h4
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className='my-6 text-gray-700 font-Ovo dark:text-white/80'>My Build Kit</motion.h4>*/}

                {/*<motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className='flex items-center gap-3 sm:gap-5'>*/}
                <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className='flex flex-wrap justify-center gap-4 sm:gap-6'>
                    {toolsData.map(({ icon, name }, index) => (
                        <motion.li
                        whileHover={{ scale: 1.1 }}
                        key={index}
                        className="relative group flex items-center justify-center
                                w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg
                                cursor-pointer hover:-translate-y-1 duration-500">
                        <Image src={icon} alt={name} className="w-5 sm:w-7" />
                        {/* tooltip bubble */}
                        <span
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2
                                    px-2 py-1 rounded-md text-xs whitespace-nowrap
                                    bg-gray-700 text-white opacity-0 pointer-events-none
                                    group-hover:opacity-100 group-hover:-translate-y-1
                                    transition duration-200">
                        {name}
                        </span>
                    </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About
