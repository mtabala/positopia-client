import "./Header.scss"
import logo from "../../assets/logo/positopia-logo.svg"
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <NavLink className="header__logo" to="/">
                <img className="header__logo-img" src={logo} alt="logo positopia" />
            </NavLink>

            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "nav__link nav__link--active" : "nav__link"
                            }>
                            Home
                        </NavLink>
                    </li>

                    <li className="nav__item">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "nav__link nav__link--active" : "nav__link"
                            }>
                            Contact Us
                        </NavLink>
                    </li>

                    <li className="nav__item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "nav__link nav__link--active" : "nav__link"
                            }>
                            Languages
                        </NavLink>
                    </li>

                    <li className="nav__item">
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? "nav__link nav__link--active" : "nav__link"
                            }>
                            Sign In
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;