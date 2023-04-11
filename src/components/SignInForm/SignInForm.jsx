import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "./SignInSignUpForm.scss";
import signup from "../../assets/images/team.svg"
import signin from "../../assets/images/solidarity.svg"

import user from "../../assets/icons/user.svg"
import lock from "../../assets/icons/lock.svg"
import mail from "../../assets/icons/mail.svg"
import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"
import google from "../../assets/icons/google.svg"

function SignInForm() {
    const api = "http://localhost:8000";
    const [isLogin, setIsLogin] = useState(true);
    const formUseRef = useRef();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const notify = () => toast("Welcome back ❤ We missed you!");

        axios.post(`${api}/profile/login`, {
            user: e.target.username.value,
            password: e.target.password.value
        }).then(res => {
            const loggedInUser = res.data;
            console.log("loggedInUser", loggedInUser)
            console.log('res: ', res)
            notify();
            navigate(`/profile/${loggedInUser.id}`);
        }).catch((error) => {
            console.log("error: ", error);
        })
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        const notify = () => toast("Welcome ❤ Update your profile!");

        const form = formUseRef.current;
        const name = form.name;
        const email = form.email;
        const password = form.password;

        console.log(name)
        console.log(email)
        console.log(password)

        axios.post(`${api}/profile`, {
            name: name.value,
            email: email.value,
            password: password.value
        }).then((res) => {
            const NewUser = res.data;
            console.log(res)
            // console.log(NewUser)
            notify();
            sessionStorage.setItem("userId", NewUser.id);
            navigate(`/profile/settings/${NewUser.id}`);
        }).catch((error) => {
            console.log("error: ", error);
        })
    };

    const handleToggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <>
            <section className="container">
                <div className="forms">

                    <div className="forms__wrapper">
                        {isLogin ? (
                            <form className="form" onSubmit={handleSubmit}>
                                <h2 className="form__title">Sign in</h2>
                                <div className="form__inputs">
                                    <img className="form__icon" src={user} alt="user icon" />
                                    <input className="form__input" name="username" type="text" placeholder="Username" />
                                </div>
                                <div className="form__inputs">
                                    <img className="form__icon" src={lock} alt="lock icon" />
                                    <input className="form__input" name="password" type="password" placeholder="Password" />
                                </div>
                                <button className="form__btn btn"> Login </button>


                                <p className="form__text">Or Sign in with social platforms</p>
                                <div className="form__social">
                                    <Link to="" className="form__social-link">
                                        <img className="form__social-icon" src={facebook} alt="facbook icon" />
                                    </Link>
                                    <Link to="" className="form__social-link">
                                        <img className="form__social-icon" src={instagram} alt="instagram icon" />
                                    </Link>
                                    <Link to="" className="form__social-link">
                                        <img className="form__social-icon" src={google} alt="google icon" />
                                    </Link>
                                </div>
                            </form>
                        ) : (
                            <form className="form" onSubmit={handleRegistration} ref={formUseRef}>
                                <h2 className="form__title">Sign up</h2>
                                <div className="form__inputs">
                                    <img className="form__icon" src={user} alt="user icon" />
                                    <input className="form__input" name="name" type="text" placeholder="Username" />
                                </div>
                                <div className="form__inputs">
                                    <img className="form__icon" src={mail} alt="email icon" />
                                    <input className="form__input" name="email" type="email" placeholder="Email" />
                                </div>
                                <div className="form__inputs">
                                    <img className="form__icon" src={lock} alt="lock icon" />
                                    <input className="form__input" name="password" type="password" placeholder="Password" />
                                </div>
                                <button className="form__btn btn"> Sign Up </button>

                                <p className="form__text text">Or Sign Up with social platforms</p>
                                <div className="form__social">
                                    <Link to="" className="form__social-link">
                                        <img className="form__social-icon" src={facebook} alt="facbook icon" />
                                    </Link>
                                    <Link to="" className="form__social-link">
                                        <img className="form__social-icon" src={instagram} alt="instagram icon" />
                                    </Link>
                                    <Link to="" className="form__social-link">
                                        <img className="form__social-icon" src={google} alt="google icon" />
                                    </Link>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                <div className="panel">
                    {isLogin ? (
                        <div className="panel__left">
                            <div className="panel__content">
                                <h3 className="panel__title">New here?</h3>
                                <p className="panel__text text">Join the community of socially conscious individuals who prioritize kindness and compassion in their daily lives. When we're kind we inspire others to be kind. So be kind, share your stories and watch how you inspire others.</p>
                                <button className="panel__btn btn" onClick={handleToggleForm}>
                                    Join Positopia
                                </button>
                            </div>
                            <img src={signin} className="panel__img" alt="sign in" />
                        </div>
                    ) : (

                        <div className="panel__right">
                            <div className="panel__content">
                                <h3 className="panel__title">One of us?</h3>
                                <p className="panel__text text">Welcome back, we've missed you! Ready to do more good in the world and make a positive impact on others? Start with everyday actions to change your life and the world around you.  </p>
                                <button className="panel__btn btn" onClick={handleToggleForm}>
                                    Yes, I'm ready!
                                </button>
                            </div>
                            <img src={signup} className="panel__img" alt="sign up" />
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
export default SignInForm;
