import React from 'react';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import "../styles/Home.scss";

function Home() {

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

    const buttonhMotion = {
        initial: {opacity:0, y:60},
        animate: {opacity:1, y:0, transition: {duration: 1, delay:0.6, ease: [0.5, 1, 0.89, 1]}},
        exit: {opacity: 0, y:20, transition: {duration: 1}}
    };

    return (
        <div className="home">
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion} className="background-image home"></motion.div>
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion} className="home__left">
                <h1><motion.i initial="initial" animate="animate" exit="exit" variants={subTitleMotion}>SO, YOU WANT TO TRAVEL TO </motion.i><span><motion.i initial="initial" animate="animate" exit="exit" variants={titleMotion}>SPACE</motion.i></span></h1>
                <p><motion.i initial="initial" animate="animate" exit="exit" variants={paragraphMotion}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</motion.i></p>
            </motion.div>
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion} className="home__right">
                <Link to="/destination">
                    <motion.button initial="initial" animate="animate" exit="exit" variants={buttonhMotion}>EXPLORE</motion.button>
                </Link>
            </motion.div>          
        </div>
    )
}

export default Home;
