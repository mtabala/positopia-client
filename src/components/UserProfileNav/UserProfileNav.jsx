import React from 'react'
import { NavLink } from 'react-router-dom';
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg";
import { ReactComponent as JournalIcon } from "../../assets/icons/journal.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";
import "../UserProfileNav/UserProfileNav.scss"

function UserProfileNav({ id, image, name }) {
    return (
        <aside className="user__nav">
            <div className="user__intro">
                <img className="user__intro-photo" src={image} />
                <p className="user__intro-name"> {name}</p>
            </div>
            <ul className="user__list">
                <li className="user__item">
                    <NavLink to={`/profile/${id}`}
                        className={({ isActive }) =>
                            isActive
                                ? "user__item-link user__item-link--active"
                                : "user__item-link"
                        }>
                        <UserIcon className="user__icon" />
                        <span className="user__icon-space"> My Profile </span> </NavLink>
                </li>
                <li className="user__item">
                    <NavLink to="/kindness" className={({ isActive }) =>
                        isActive
                            ? "user__item-link user__item-link--active"
                            : "user__item-link"
                    }> <CalendarIcon className="user__icon" />
                        <span className="user__icon-space"> Daily Kindness Act </span> </NavLink>
                </li>

                <li className="user__item">
                    <NavLink to={`/profile/journal/${id}`} className={({ isActive }) =>
                        isActive
                            ? "user__item-link user__item-link--active"
                            : "user__item-link"
                    }> <JournalIcon className="user__icon" />
                        <span className="user__icon-space"> Kindness Journal </span> </NavLink>
                </li>

                <li className="user__item">
                    <NavLink to={`/profile/settings/${id}`} className={({ isActive }) =>
                        isActive
                            ? "user__item-link user__item-link--active"
                            : "user__item-link"
                    }> <SettingsIcon className="user__icon" />
                        <span className="user__icon-space"> Profile settings</span> </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default UserProfileNav;