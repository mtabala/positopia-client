import { useEffect } from "react";
import "./ProfileSettings.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import defaultImg from "../../assets/images/default.png";
import { useForm } from "react-hook-form";

function ProfileSettings({ id, image }) {
    const api = "http://localhost:8000";
    const [, setFile] = useState(null);


    const [users, setUsers] = useState([]); // all users
    const [user, setUser] = useState(null);

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

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleUpload = (e) => {
        // console.log(e.target.files[0]);
        setFile(e.target.files[0]);
        const data = new FormData();
        data.append("file", e.target.files[0]);
        data.append("id", id);

        axios.post(`${api}/profile/settings`, data, {
            headers: {
                "Content-Type": "multipart/data",
            },
        });
    };

    const handleUpdate = (data) => {
        const notify = () => toast("Your profile has been updated ❤");

        axios
            .patch(`${api}/profile/settings/${id}`, {
                name: data.name,
                password: data.password,
                location: data.location,
                email: data.email,
                description: data.description,
            })
            .then((res) => {
                window.location.reload();
                notify();
            })
            .catch((err) => console.log("err: ", err));
    };

    return (
        <main className="main">
            {user && (<div className="edit">
                {users
                    .filter((obj) => (
                        obj.id === user.id
                    ))
                    .map((user) => (
                        <>
                            <div className="edit__wrapper">
                                <div className="edit__title">
                                    <span className="edit__title-update">Update Your Account</span>
                                    <span className="edit__title-delete">Delete Account</span>
                                </div>
                                <form className="edit__form">
                                    <label className="edit__label">Profile Picture</label>
                                    <div className="edit__photo">
                                        <img src={image ? image : defaultImg} alt="user avatar" />
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

                                <form className="edit__form-wrapper">
                                    <div className="edit__inputs-wrapper">
                                        <div className="edit__inputs">
                                            <label className="edit__label">Username</label>
                                            <input
                                                className="edit__input"
                                                type="text"
                                                name="name"
                                                value={user.name}
                                                placeholder="*Name"
                                                {...register("name", { required: true, pattern: /^[A-Za-z\s]+$/i })}
                                            />
                                            {errors.name && errors.name.type === "required" && (
                                                <span className="form__error">This field is required</span>
                                            )}
                                            {errors.name && errors.name.type === "pattern" && (<span className="form__error">Please enter letters only</span>)}
                                            <label className="edit__label">Email</label>
                                            <input
                                                className="edit__input"
                                                type="email"
                                                placeholder="*Email"
                                                value={user.email}
                                                name="email"
                                                {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })}
                                            />
                                            {errors.email && errors.email.type === "required" && (
                                                <span className="form__error">This field is required</span>
                                            )}
                                            {errors.email && errors.email.type === "pattern" && (<span className="form__error">Please enter a valid email address</span>)}
                                            <label className="edit__label">Password</label>
                                            <input
                                                className="edit__input"
                                                type="password"
                                                name="password"
                                                value={user.password}
                                                placeholder="*Password"
                                                {...register("password", { required: true, minLength: 6 })}
                                            />
                                            {errors.password && errors.password.type === "required" && (
                                                <span className="form__error">This field is required</span>
                                            )}
                                            {errors.password && errors.password.type === "minLength" &&
                                                (<span className="form__error">Password must have at least 6 characters</span>
                                                )}

                                        </div>
                                        <div className="edit__inputs">
                                            <label className="edit__label">About me</label>
                                            <textarea
                                                className="edit__input edit__input--about"
                                                type="text"
                                                placeholder="*Tell us about yourself"
                                                name="description"
                                                {...register("description", { required: true, minLength: 50 })}
                                            />
                                            {errors.description && errors.description.type === "required" && (
                                                <span className="form__error">This field is required</span>
                                            )}
                                            {errors.description && errors.description.type === "minLength" &&
                                                (<span className="form__error">Description must have at least 50 characters</span>
                                                )}
                                            <label className="edit__label">Location</label>
                                            <input
                                                className="edit__input"
                                                type="text"
                                                placeholder="*Location"
                                                name="location"
                                                {...register("location", { required: true, pattern: /^[A-Za-z\s]+$/i })}
                                            />
                                            {errors.location && errors.location.type === "required" && (
                                                <span className="form__error">This field is required</span>
                                            )}
                                            {errors.location && errors.location.type === "pattern" && (<span className="form__error">Please enter letters only</span>)}
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleSubmit(handleUpdate)}
                                        className="edit__btn btn"
                                        type="submit"
                                    >
                                        Update
                                    </button>
                                </form>
                            </div>
                        </>))}
            </div>)}
        </main>
    );
}
export default ProfileSettings;