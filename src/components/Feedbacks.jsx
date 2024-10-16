import React from 'react'
import {motion, px} from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn , textVariant } from '../utils/motion'
import { testimonials } from '../constants'
function Feedbacks() {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]` }>

        <motion.div variants={textVariant()} >
          <p className={styles.sectionSubText}>What Other Say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}></div>
    </div>
  )
}

export default Feedbacks
