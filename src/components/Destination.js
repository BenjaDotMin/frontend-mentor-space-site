import React, {useState} from 'react';
import {motion} from "framer-motion";
import "../img/image-europa.png";
import "../img/image-mars.png";
import "../img/image-moon.png";
import "../img/image-titan.png";
import "../styles/Destination.scss";
import "../styles/_tabs.scss";

function Destination({data}) {

    const pageMotion = {
        initial: {opacity: 0},
        animate: {opacity: 1, transition: {duration: 1}},
        exit: {opacity: 0, y:20, transition: {duration: 1}}
    };

    const tabHeadMotion = {
        initial: {opacity: 0, y:5},
        animate: {opacity: 1, y:0, transition: {duration: 1, staggerChildren:0.1}},
        exit: {opacity: 0, y:20, transition: {duration: 1}}
    };

    const statsMotion = {
        initial: {opacity: 0, y:10},
        animate: {opacity: 1, y:0, transition: {duration: 1, staggerChildren:0.6, delay:1,  delayChildren: 0.8}},
        exit: {opacity: 0, y:20, transition: {duration: 1}}
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
        animate: {opacity: 1, y:0, skewY:0, transition: {duration: 1.4, ease: [0.5, 1, 0.89, 1]}},
        exit: {opacity: 0, y:20, transition: {duration: 1}}
    };

    const planetMotion = {
        initial: {opacity: 0, y:20},
        animate: {opacity: 1, y:0, transition: {duration: 1.2, delay:0.5, ease: [0.5, 1, 0.89, 1]}},
        exit: {opacity: 0, y:20, transition: {duration: 1}}
    };

    const [activeTab, setActiveTab] = useState("Moon");    

    return (
        <div className="destination">
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion} className="background-image destination"></motion.div>
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion} className="destination__left">
                <h2><motion.i initial="initial" animate="animate" exit="exit" variants={subTitleMotion}><span>01</span>PICK YOUR DESTINATION</motion.i></h2>   
                {data.map(image => (<motion.img initial="initial" animate="animate" exit={"exit"} variants={planetMotion} key={image.name} src={image.images.png} alt={`the planet ${image.name}`} className={`${activeTab === image.name ? "active" : ""}`} />))}                         
            </motion.div>
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion} className="destination__right">
                <motion.ul initial="initial" animate="animate" exit="exit" variants={tabHeadMotion} className="destination__tabs tabs">
                    {data.map(planet => (<motion.li variants={tabHeadMotion} exit="exit" key={planet.name} className={`${activeTab === planet.name ? "active" : ""}`} onClick={() => setActiveTab(planet.name)}>{planet.name}</motion.li>))}                  
                </motion.ul>
                {data.map(planet => (
                    <div key={planet.name} className={`destination__content ${activeTab === planet.name ? "active" : ""}`}>
                        <h3><motion.i initial="initial" animate="animate" exit="exit" variants={titleMotion}>{planet.name}</motion.i></h3>
                        <p><motion.i initial="initial" animate="animate" exit="exit" variants={paragraphMotion}>{planet.description}</motion.i></p>
                        <motion.ul initial="initial" animate="animate" exit="exit" variants={statsMotion} className="destination__stats">
                            <motion.li variants={tabHeadMotion}>AVG. DISTANCE
                                <p>{planet.distance}</p>
                            </motion.li>
                            <motion.li variants={tabHeadMotion}>EST. TRAVEL TIME
                                <p>{planet.travel}</p>
                            </motion.li>
                        </motion.ul>
                    </div>    
                ))}                        
            </motion.div>   
        </div>
    )
}

export default Destination;
