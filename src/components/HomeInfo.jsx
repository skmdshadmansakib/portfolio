import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import { motion } from "framer-motion";

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <motion.img src={arrow} className='w-4 h-4 object-contain'
        whileHover={{ scale: 1.1 }}
        animate={{ y: [0, -10, 0], transition: { duration: 0.6, repeat: Infinity, repeatType: 'reverse' } }}
        />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <motion.h1 
        className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
        Hello, I’m <span className='font-semibold'>Sakib</span>, an Electrical and IT Engineer.
        </motion.h1>
    ),
    2: (
        <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
            <InfoBox 
            text="As a newcomer, I'm adding a section to demonstrate my abilities."
            link="/about"
            btnText="Learn more"
            />
        </motion.h1>
    ),
    3: (
        <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
            <InfoBox 
            text="Discover my work and insights in research."
            link="/publication"
            btnText="Explore"
            />            
        </motion.h1>
    ),
    4: (
        <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
            <InfoBox 
            text="Looking for a engineer? I'm just a few keystrokes away"
            link="/contact"
            btnText="Let's talk"
            />            
        </motion.h1>
    ),
}



const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo