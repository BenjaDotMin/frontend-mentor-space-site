import React, {useState, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
import logo from "../img/logo.svg";
import "../styles/Header.scss";
import "../styles/_tabs.scss";
import burgerIcon from  "../img/icon-hamburger.svg";
import closeIcon from  "../img/icon-close.svg";

function Header() {
    const location = useLocation();

    const [activeNav, setActiveNav] = useState("home");   
    const [activeMenu, setActiveMenu] = useState(false);   

    const clickHeading = page => {
        setActiveNav(page);
        activeMenu && setActiveMenu(false);
    }

    useEffect(() => {        
        location.pathname === "/" && setActiveNav("home");
        location.pathname === "/destination" && setActiveNav("destination");
        location.pathname === "/crew" && setActiveNav("crew");
        location.pathname === "/technology" && setActiveNav("technology");
    }, [location]);

    return (
        <header>
            <Link to="/"><img src={logo} alt="space logo" /></Link>           
            <hr />
            <ul className={`tabs ${activeMenu ? "active" : ""}`}>
                <li className={activeNav === "home" ? "active" : ""} onClick={() => clickHeading("home")}><Link to="/"><span>00</span>HOME</Link></li>
                <li className={activeNav === "destination" ? "active" : ""} onClick={() => clickHeading("destination")}><Link to="/destination"><span>01</span>DESTINATION</Link></li>
                <li className={activeNav === "crew" ? "active" : ""} onClick={() => clickHeading("crew")}><Link to="/crew"><span>02</span>CREW</Link></li>
                <li className={activeNav === "technology" ? "active" : ""} onClick={() => clickHeading("technology")}><Link to="/technology"><span>03</span>TECHNOLOGY</Link></li>
            </ul>
            <img className="burger-menu" src={activeMenu ? closeIcon : burgerIcon} alt="open menu" onClick={() => setActiveMenu(!activeMenu)} />
      </header>
    )
}

export default Header;
