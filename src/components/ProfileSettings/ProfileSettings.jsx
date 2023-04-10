import React from 'react'
import "./ProfileSettings.scss"
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";

function ProfileSettings({ name, location, email, image }) {
    return (
        <div className="edit">
            <div className="edit__wrapper">
                <div className="edit__title">
                    <span className="edit__title-update">Update Your Account</span>
                    <span className="edit__title-delete">Delete Account</span>
                </div>

                <form className="edit__form" >
                    <label className="edit__label">Profile Picture</label>
                    <div className="edit__photo">
                        <img
                            src={image}
                            alt="user avatar"
                        />
                        <label className="edit__label" htmlFor="fileInput">
                            <UserIcon className="edit__photo-icon" />
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                        />
                    </div>

                    <div className="edit__inputs-wrapper">
                        <div className="edit__inputs">
                            <label className="edit__label">Username</label>
                            <input className="edit__input"
                                type="text"
                                placeholder={name}
                            />
                            <label className="edit__label">Email</label>
                            <input className="edit__input"
                                type="email"
                                placeholder={email}
                            />
                            <label className="edit__label">Password</label>
                            <input className="edit__input"
                                type="password"
                            />
                        </div>
                        <div className="edit__inputs">
                            <label className="edit__label">About me</label>
                            <input className="edit__input edit__input--about"
                                type="text"
                                placeholder="About Me"
                            />
                            <label className="edit__label">Location</label>
                            <input className="edit__input"
                                type="text"
                                placeholder={location}
                            />
                        </div>
                    </div>

                    <button className="edit__btn btn" type="submit">
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
}
export default ProfileSettings;