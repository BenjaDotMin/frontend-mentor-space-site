import React, {useState} from 'react';
import {motion} from "framer-motion";
import "../img/image-douglas-hurley.png";
import "../img/image-mark-shuttleworth.png";
import "../img/image-victor-glover.png";
import "../img/image-anousheh-ansari.png";
import "../styles/Crew.scss";
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

    const subTitleMotion = {
        initial: {opacity: 0, y:-80, skewY:-6},
        animate: {opacity: 1, y:0, skewY:0, transition: {duration: 1, ease: [0.5, 1, 0.89, 1]}},
        exit: {opacity: 0, y:20, transition: {duration: 1}}
    };

    const paragraphMotion = {
        initial: {opacity:0, skewY:5, y:160},
        animate: {opacity:1, skewY:0, y:0, transition: {duration: 1, delay:0.5, ease: [0.5, 1, 0.89, 1]}},
        exit: {opacity: 0, y:20, transition: {duration: 1}}
    };

    const tabHeadMotion = {
        initial: {opacity: 0, y:14},
        animate: {opacity: 1, y:0, transition: {duration: 1, staggerChildren:0.1}},
        exit: {opacity: 0, y:20, transition: {duration: 1}}
    };

    const crewImageMotion = {
        initial: {opacity: 0, y:14},
        animate: {opacity: 1, y:0, transition: {duration: 1}},
        exit: {opacity: 0, y:20, transition: {duration: 1}}
    };

    const [activeTab, setActiveTab] = useState("Douglas Hurley");  

    return (
        <div className="crew">
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion} className="background-image crew"></motion.div>
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion} className="crew__left">
                <h2><motion.i initial="initial" animate="animate" exit="exit" variants={subTitleMotion}><span>02</span>MEET YOUR CREW</motion.i></h2>  
                {data.map(crew => (
                    <div key={crew.name} className={`crew__content ${activeTab === crew.name ? "active" : ""}`}>
                        <h3><motion.i initial="initial" animate="animate" exit="exit" variants={subTitleMotion}>{crew.role}</motion.i></h3>
                        <h4><motion.i initial="initial" animate="animate" exit="exit" variants={titleMotion}>{crew.name}</motion.i></h4>
                        <p><motion.i initial="initial" animate="animate" exit="exit" variants={paragraphMotion}>{crew.bio}</motion.i></p>  
                    </div>
                ))} 
                                
                <motion.ul initial="initial" animate="animate" exit="exit" variants={tabHeadMotion} className="crew__tab__dots">
                    {data.map(tab => (
                        <motion.li variants={tabHeadMotion} key={tab.name} exit="exit" onClick={() => setActiveTab(tab.name)} className={`${activeTab === tab.name ? "active" : ""}`}></motion.li>    
                    ))}                                  
                </motion.ul>
            </motion.div>
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion}  className="crew__right">   
                {data.map(image => (
                    <motion.img initial="initial" animate="animate" exit="exit" variants={crewImageMotion} key={image.name} src={image.images.png} alt={image.name} className={`${activeTab === image.name ? "active" : ""}`} />  
                ))}   
            </motion.div>   
        </div>
    )
}

export default Destination;
