import React from 'react'
import { Link } from 'react-router-dom';
import "../UserProfileNav/UserProfileNav.scss"

function UserProfileNav() {
    return (
        <aside className="user__nav">
            <ul className="user__list">
                <li className="user__item">
                    <Link to="/kindness" className="user__item-link"> Daily Kindness Act </Link>
                </li>

                <li className="user__item">
                    <Link to="/journal" className="user__item-link"> Positopia Journey Journal </Link>
                </li>

                <li className="user__item">
                    <Link to="/setting" className="user__item-link"> Profile settings </Link>
                </li>
            </ul>
        </aside>
    )
}

export default UserProfileNav;