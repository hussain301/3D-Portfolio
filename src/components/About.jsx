import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWraper } from '../hoc'

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px]
      rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 25, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center '>{title}</h3>
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
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-5 text-secondary text-[17px]
      max-w-3xl leading-[30px]
      '
      >
        As a skilled software developer, I am well-versed in JavaScript, Node.js, Python, and I specialize in creating powerful, user-friendly solutions with frameworks like React.js, Next.js, and Three.js. Whether you're looking to build a cutting-edge web application or optimize your existing software, I'm here to help. I take a collaborative approach to development, working closely with clients to bring their vision to life with beautiful, scalable, and efficient solutions. Let's work together to create something amazing!
      </motion.p>

      <div className='mt-20 flex  justify-center flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>

    </>
  )
}

export default SectionWraper(About , "about")