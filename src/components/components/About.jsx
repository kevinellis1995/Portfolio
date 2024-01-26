import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../../styles';
import { services } from '../../constants';
import { fadeIn, textVariant} from '../../utils/motion';
import { SectionWrapper } from '../../hoc';

const ServiceCard = ({index, title, icon}) => {
  console.log(title, icon)
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I spent my first 3 years as a Junior Developer, learning the basics and working mainly on front end solutions using HTML, CSS, and JavaScript. During this time I learned and gained experience with Node, Databases, and the Npm Ecosystem. I also learned and built frontend applications using libraries such as React, Bootstrap, and Tailwind.
      </motion.p>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Next, I moved on to role as a mid level developer, utilizing my knowledge of full stack development and learing more along the way. Through this role I gained experience in many technologies including CI/CD, Cloud Development, ServiceNow, REST APIs, and more. 
      </motion.p>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Now, I am expanding my skills every day and looking for new roles and opportunites which will increase my knowledge and experience.  
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')