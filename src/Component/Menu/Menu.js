import React, { useState } from 'react'
import menuCss from './Menu.module.css'
import {NavLink} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

function Menu() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const finalStyle = showMediaIcons ? menuCss.mobile_menu : menuCss.menu_link;
    
    return (
        <>
            <nav className={menuCss.main_nav}>
                {/* Logo Part */}
                <div className={menuCss.logo}>
                    <h2 className={menuCss.heading}>
                    <span className={menuCss.logo_spn}>N</span>imish 
                    <span className={menuCss.logo_spn}>K</span>umar
                    </h2>
                </div>
                {/* Menu Part */}
                <div className={finalStyle}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/About">About</NavLink>
                        </li>

                        <li>
                            <NavLink to="/Services">Services</NavLink>
                        </li>

                        <li>
                            <NavLink to="Contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                {/* Hamburgur Menu */}
                <div className={menuCss.hamburger_menu} onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                    </div>
            </nav>
        </>
    )
}

export default Menu;