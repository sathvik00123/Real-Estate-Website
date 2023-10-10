import React from 'react';
import './Hero.css';
import CountUp from 'react-countup'; 
import {motion} from 'framer-motion';
import SearchBar from '../SearchBar/SearchBar';


const Hero = () => {     
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            
            {/* left section */}    
            <div className="flexCenter hero-left">
            <motion.div className="image-container"
                    initial={{x : "-6rem", opacity: 0}}
                    animate={{x : 0, opacity: 1}}
                    transition={{
                        duration: 4,
                        type: "spring"
                    }}
                >
                    <img src="./hero-image.jpg" alt="" />
                </motion.div>
                
            </div>

            {/* right section */}
            <div className="hero-right flexColStart">
                <div  className="hero-title">
                    <div className="orange-circle" />
                    <motion.h1
                    initial={{y : "2rem", opacity: 0}}
                    animate={{y : 0, opacity: 1}}
                    transition={{
                        duration: 4,
                        type: "spring"
                    }}
                    >
                        Find your <br />
                        own future <br />
                        residence to <br />
                        reside
                    </motion.h1>
                </div>

                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Find a variety of property that suit you very easilty</span>
                    <span className='secondaryText'>Forget all difficulties in finding a residence for you.</span>
                </div>

                <SearchBar />

                <motion.div className="flexCenter stats"
                initial={{y : "2rem",opacity : 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                    duration: 3,
                    type: "spring"
                }}
                >
                    <div className="flexColCenter stat">
                        <span>
                        <CountUp start={8800} end={9000} duration={4}/>
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                        <CountUp start={1950} end={2000} duration={4}/>
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                        <CountUp end={28} />
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Awards Winning</span>
                    </div>
                </motion.div>

            </div>

        </div>
    </section>
  )
}

export default Hero

