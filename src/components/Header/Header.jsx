import "./Header.scss";
import { ReactComponent as LogoIcon } from "../../assets/logo/positopia-logo.svg";
import menu from "../../assets/icons/menu.svg";
import xmenu from "../../assets/icons/xmenu.svg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="header">
            <NavLink className="header__logo-link" to="/">
                <LogoIcon className="header__logo-img" />
            </NavLink>

            <nav className="navbar">
                <img src={menu} className="navbar__icon navbar__icon--menu" onClick={() => setMenuOpen(!menuOpen)} />
                {/* <img src={xmenu} className="navbar__icon navbar__icon--xmenu" /> */}
                <ul className={menuOpen ? "navbar__list" : "navbar__list--closed"}>
                    <li className="navbar__item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "navbar__link navbar__link--active"
                                    : "navbar__link"
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="navbar__item">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "navbar__link navbar__link--active"
                                    : "navbar__link"
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>

                    <li className="navbar__item navbar__item--dropdown">
                        {/* onClick={toggleDropdown} */}
                        <NavLink
                            to="/language"
                            className={({ isActive }) =>
                                isActive
                                    ? "navbar__link navbar__link--active"
                                    : "navbar__link"
                            }
                        >
                            Languages
                        </NavLink>
                    </li>

                    <li className="navbar__item">
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive
                                    ? "navbar__link navbar__link--active"
                                    : "navbar__link"
                            }
                        >
                            Sign In
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;