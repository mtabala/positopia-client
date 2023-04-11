import React from 'react'
import "./ProfileSettings.scss"
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useState } from 'react';
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";

function ProfileSettings({ id, name, location, email, image }) {
    const api = "http://localhost:8000";
    const [file, setFile] = useState(null);

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userLocation, setUserLocation] = useState("");
    const [userDescription, setUserDescription] = useState("");


    const handleUpload = (e) => {
        console.log(e.target.files[0])
        setFile(e.target.files[0])
        const data = new FormData();
        data.append("file", e.target.files[0]);
        data.append("id", id);
        // updatedUser.avatar = filename;

        const res = axios.post(`${api}/profile/settings`, data, {
            headers: {
                "Content-Type": "multipart/data",
            },
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        // setUserName(e.target.name.value)
        // console.log(e.target.name.value)

        console.log('USER NAME: ', userName)

        axios.patch(`${api}/profile/settings/${id}`, {
            name: userName,
            // password: userPassword,
            // location: userLocation,
            // email: userEmail,
            // description: userDescription,
        })
            .catch(err => console.log('err: ', err))

    }

    const updateUser = (e) => {
        axios.patch(`${api}/profile/settings/${id}`, {
            name: userName,
            password: userPassword,
            location: userLocation,
            email: userEmail,
            description: userDescription,
        })
    }

    console.log('user name: ', userName)

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
                            name="fileInput"
                            style={{ display: "none" }}
                            onChange={handleUpload}
                        />
                    </div>
                </form>

                <form className="edit__form-wrapper" >

                    <div className="edit__inputs-wrapper">
                        <div className="edit__inputs">
                            <label className="edit__label">Username</label>
                            <input className="edit__input"
                                type="text"
                                name={name}
                                placeholder={name}
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
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
                            <textarea className="edit__input edit__input--about"
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

                    <button onClick={handleUpdate} className="edit__btn btn" type="submit">
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
}
export default ProfileSettings;