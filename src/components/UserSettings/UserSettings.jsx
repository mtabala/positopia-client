import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserProfileNav from '../UserProfileNav/UserProfileNav';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import UserSideBar from '../UserSideBar/UserSideBar';
import "./UserSettings.scss"

function UserSettings() {
    const api = "http://localhost:8000";

    const [users, setUsers] = useState([]); // all users
    const [user, setUser] = useState(null);
    const { id } = useParams();

    // Define useEffect hook to get all users from the API
    useEffect(() => {
        getUsers();
    }, []);

    // Define useEffect hook to get the specific user when the user id changes
    useEffect(() => {
        if (id) {
            getUser(id);
        } else if (users.length) {
            getUser(users[0].id);
        }
    }, [id, users]);

    // Define function to get a specific user from the API by id
    function getUser(id) {
        axios
            .get(`${api}/profile/${id}`)
            .then((res) => {
                setUser(res.data);
                // console.log(res.data);
                sessionStorage.setItem("userId", res.data.id);
            })
            .catch((err) => {
                console.log("err: ", err);
            })
    };

    // Define function to get all the users from the API
    function getUsers() {
        axios
            .get(`${api}/profile`)
            .then((response) => {
                setUsers(response.data);
                // console.log(response.data)
            })
            .catch((err) => {
                console.log("err: ", err);
            })
    };

    return (
        <section className="settings">
            <UserProfileNav id={id} />
            {user && (<div className="settings__wrapper">
                {users
                    .filter((obj) => (
                        obj.id === user.id
                    ))
                    .map((user) => (
                        <>
                            <ProfileSettings {...user} />
                            <UserSideBar {...user} />
                        </>
                    ))}
            </div>)}
        </section>
    )
}

export default UserSettings;
