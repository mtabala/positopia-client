import React from 'react'
import { Link } from 'react-router-dom';
import "../UserProfileNav/UserProfileNav.scss"

function UserProfileNav({ id }) {
    return (
        <aside className="user__nav">
            <ul className="user__list">
                <li className="user__item">
                    <Link to={`/profile${id}`} className="user__item-link"> My Profile </Link>
                </li>
                <li className="user__item">
                    <Link to="/kindness" className="user__item-link"> Daily Kindness Act </Link>
                </li>

                <li className="user__item">
                    <Link to="/journal" className="user__item-link"> Kindness Journal </Link>
                </li>

                <li className="user__item">
                    <Link to="/setting" className="user__item-link"> Profile settings </Link>
                </li>
            </ul>
        </aside>
    )
}

export default UserProfileNav;