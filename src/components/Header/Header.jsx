import "./Header.scss";
import { ReactComponent as LogoIcon } from "../../assets/logo/positopia-logo.svg";
import menu from "../../assets/icons/menu.svg";
import xmenu from "../../assets/icons/xmenu.svg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <NavLink className="header__logo-link" to="/">
                <LogoIcon className="header__logo-img" />
            </NavLink>

            <nav className="navbar">
                {/* <input type="checkbox" id="navbar__checkbox" className="navbar__checkbox" />
                <label htmlFor="navbar__checkbox" className="navbar__toogle">
                    <img src={menu} className="navbar__icon navbar__icon--menu" />
                    <img src={xmenu} className="navbar__icon navbar__icon--xmenu" />
                </label> */}

                <ul className="navbar__list">
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