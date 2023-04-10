import React from 'react'
import { NavLink } from 'react-router-dom';
import "../UserProfileNav/UserProfileNav.scss"

function UserProfileNav({ id }) {
    return (
        <aside className="user__nav">
            <ul className="user__list">
                <li className="user__item">
                    <NavLink to={`/profile/${id}`}
                        className={({ isActive }) =>
                            isActive
                                ? "user__item-link user__item-link--active"
                                : "user__item-link"
                        }> My Profile </NavLink>
                </li>
                <li className="user__item">
                    <NavLink to="/kindness" className={({ isActive }) =>
                        isActive
                            ? "user__item-link user__item-link--active"
                            : "user__item-link"
                    }> Daily Kindness Act </NavLink>
                </li>

                <li className="user__item">
                    <NavLink to={`/profile/journal/${id}`} className={({ isActive }) =>
                        isActive
                            ? "user__item-link user__item-link--active"
                            : "user__item-link"
                    }> Kindness Journal </NavLink>
                </li>

                <li className="user__item">
                    <NavLink to={`/setting/${id}`} className={({ isActive }) =>
                        isActive
                            ? "user__item-link user__item-link--active"
                            : "user__item-link"
                    }> Profile settings </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default UserProfileNav;