import "../UserProfile/UserProfile.scss";
import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";

function UserProfile() {
    const api = "http://localhost:8000";

    const location = useLocation();
    const loggedInUser = location.state;
    console.log("myState:", loggedInUser);

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
                console.log(response.data)
            })
            .catch((err) => {
                console.log("err: ", err);
            })
    };

    return (
        <main className="user">
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

            <section className="user__view">
                {users
                    .filter((user) => (
                        loggedInUser.id === user.id
                    ))
                    .map((user) => (
                        <>
                            <div className="user__profile">
                                <img className="user__img" src={user.image}></img>
                                <h3 className="user__name">{user.name}</h3>
                            </div>

                            <div className="user__bio">
                                <h3 className="user__name"> About me: </h3>
                                <p className="user__description">{user.description}</p>
                            </div>
                        </>
                    ))}
            </section>
        </main>

    );
}

export default UserProfile;