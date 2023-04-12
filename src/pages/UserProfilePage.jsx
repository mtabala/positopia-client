import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";
import UserProfile from "../components/UserProfile/UserProfile";
import UserProfileNav from "../components/UserProfileNav/UserProfileNav";

function UserProfilePage() {
    const api = "http://localhost:8000";

    const [users, setUsers] = useState([]); // all users
    const [user, setUser] = useState(null);
    const [currentActs, setCurrentActs] = useState([]);

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
                console.log(res.data);
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
                console.log(response.data)
            })
            .catch((err) => {
                console.log("err: ", err);
            })
    };

    // Define onDeleteCurrentAct function
    console.log(id);

    const onDeleteCurrentAct = (act) => {
        console.log(act);
        axios.delete(`${api}/profile/${id}/${act}`)
            .then((data) => {
                // Update the state to remove the deleted act from the current acts list
                getUsers(id);

            })
            .catch((err) => {
                console.error("Error deleting act:", err);
            });
    };

    console.log(id);

    return (
        <main className="user">
            <UserProfileNav id={id} />
            {user && (<section className="user__view">
                {users
                    .filter((obj) => (
                        obj.id === user.id
                    ))
                    .map((user) => (
                        <>
                            <UserProfile key={id} currentActs={currentActs}
                                setCurrentActs={setCurrentActs}
                                onDeleteCurrentAct={onDeleteCurrentAct} {...user} />
                        </>
                    ))}
            </section>)}

        </main>

    );
}

export default UserProfilePage;