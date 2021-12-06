import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion";
import "../img/image-launch-vehicle-portrait.jpg";
import "../img/image-launch-vehicle-landscape.jpg";
import "../img/image-spaceport-landscape.jpg";
import "../img/image-space-capsule-landscape.jpg";
import "../styles/Technology.scss";
import "../styles/_tabs.scss";

function Destination({data}) {

    const pageMotion = {
        initial: {opacity: 0},
        animate: {opacity: 1, transition: {duration: 1}},
        exit: {opacity: 0, transition: {duration: 1}}
    };

    const titleMotion = {
        initial: {opacity: 0, y:145, skewY:8},
        animate: {opacity: 1, y:0, skewY:0, transition: {duration: 1, delay:0.4, ease: [0.5, 1, 0.89, 1]}},
        exit: {opacity: 0, y:20, transition: {duration: 1}}
    };

    const paragraphMotion = {
        initial: {opacity:0, skewY:5, y:160},
        animate: {opacity:1, skewY:0, y:0, transition: {duration: 1, delay:0.5, ease: [0.5, 1, 0.89, 1]}},
        exit: {opacity: 0, y:20, transition: {duration: 1}}
    };

    const subTitleMotion = {
        initial: {opacity: 0, y:-80, skewY:-6},
        animate: {opacity: 1, y:0, skewY:0, transition: {duration: 1, ease: [0.5, 1, 0.89, 1]}},
        exit: {opacity: 0, y:20, transition: {duration: 1}}
    };

    const tabHeadMotion = {
        initial: {opacity: 0, y:14},
        animate: {opacity: 1, y:0, transition: {duration: 1, staggerChildren:0.3}},
        exit: {opacity: 0, y:20, transition: {duration: 1}}
    };

    const techImageMotion = {
        initial: {opacity: 0, y:14},
        animate: {opacity: 1, y:0, transition: {duration: 1}},
        exit: {opacity: 0, y:20, transition: {duration: 1}}
    };
    
    const [activeTab, setActiveTab] = useState("Launch vehicle");  
    const [isMobile, setIsMobile] = useState(false);  

    const handleResize = () => window.innerWidth <= 870 ? setIsMobile(true) : setIsMobile(false);    

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);       
        return () => window.removeEventListener('resize', handleResize);      
    }, [])

    return (
        <div className="technology">
            <motion.div initial="initial" animate="animate" exit={"exit"} variants={pageMotion} className="background-image technology"></motion.div>
            <motion.div initial="initial" animate="animate" exit={"exit"} variants={pageMotion} className="technology__left">
                <h2><motion.i initial="initial" animate="animate" exit={"exit"} variants={subTitleMotion}><span>03</span>SPACE LAUNCH 101</motion.i></h2>    
                <div className="technology__tabs">
                    <motion.ul initial="initial" animate="animate" exit={"exit"} variants={tabHeadMotion} className="technology__tab__headers">
                        {data.map((tech, i) => (
                            <motion.li variants={tabHeadMotion} key={tech.name} onClick={() => setActiveTab(tech.name)} className={`${activeTab === tech.name ? "active" : ""}`}>{i+1}</motion.li>                           
                        ))}                        
                    </motion.ul>
                    <div className="technology__tab">
                        <h3><motion.i initial="initial" animate="animate" exit={"exit"} variants={subTitleMotion}>THE TERMINOLOGY...</motion.i></h3>
                        {data.map(tech => (
                            <div key={tech.name} className={`technology__tab__content ${activeTab === tech.name ? "active" : ""}`}>
                                <h4><motion.i initial="initial" animate="animate" exit={"exit"} variants={titleMotion}>{tech.name}</motion.i></h4>
                                <p><motion.i initial="initial" animate="animate" exit={"exit"} variants={paragraphMotion}>{tech.description}</motion.i></p>
                            </div> 
                        ))}                                               
                    </div>                   
                </div>                
            </motion.div>
            <motion.div initial="initial" animate="animate" exit={"exit"} variants={pageMotion} className="technology__right">
                {data.map(techImage => (
                    <motion.img initial="initial" animate="animate" exit={"exit"} variants={techImageMotion} key={techImage.name} src={isMobile ? techImage.images.landscape : techImage.images.portrait} alt={techImage.name} className={`${activeTab === techImage.name ? "active" : ""}`} /> 
                ))}               
            </motion.div>   
        </div>
    )
}

export default Destination;
