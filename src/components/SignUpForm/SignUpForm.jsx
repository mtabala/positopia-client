// import React, { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../SignInForm/SignInSignUpForm.scss";
// import signup from "../../assets/images/team.svg"

// import user from "../../assets/icons/user.svg"
// import lock from "../../assets/icons/lock.svg"
// import mail from "../../assets/icons/mail.svg"
// import facebook from "../../assets/icons/facebook.svg"
// import instagram from "../../assets/icons/instagram.svg"
// import google from "../../assets/icons/google.svg"

// function SignUpForm() {
//     const [isLogin, setIsLogin] = useState(true);
//     const navigate = useNavigate()


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form submitted");

//         axios.post('http://localhost:8000/profile/login', {
//             user: e.target.username.value,
//             password: e.target.password.value
//         }).then(res => {

//             const loggedInUser = res.data;
//             alert("Welcome back, let's do some kindness");

//             // use navigate whatever and alsoo put loggin user into the navigate
//             console.log('res: ', res)
//             // navigate to whatever page with the response info
//             navigate("/profile", { state: loggedInUser });
//         })
//     };

//     const handleToggleForm = () => {
//         setIsLogin(!isLogin);
//     };

//     const containerClassName = isLogin ? "container" : "container sign-up-mode";

//     return (
//         <>
//             <section className={containerClassName}>
//                 <div className="forms">

//                     <div className="forms__wrapper">
//                         {isLogin ? (
//                             <form className="form" onSubmit={handleSubmit}>
//                                 <h2 className="form__title">Sign in</h2>
//                                 <div className="form__inputs">
//                                     <img className="form__icon" src={user} alt="user icon" />
//                                     <input className="form__input" name="username" type="text" placeholder="Username" />
//                                 </div>
//                                 <div className="form__inputs">
//                                     <img className="form__icon" src={lock} alt="lock icon" />
//                                     <input className="form__input" name="password" type="password" placeholder="Password" />
//                                 </div>
//                                 {/* <Link to="/profile" className="form__btn btn"> Login </Link> */}
//                                 <button className="form__btn btn"> Login </button>

//                                 <p className="form__text">Or Sign in with social platforms</p>
//                                 <div className="form__social">
//                                     <Link to="" className="form__social-link">
//                                         <img className="form__social-icon" src={facebook} alt="facbook icon" />
//                                     </Link>
//                                     <Link to="" className="form__social-link">
//                                         <img className="form__social-icon" src={instagram} alt="instagram icon" />
//                                     </Link>
//                                     <Link to="" className="form__social-link">
//                                         <img className="form__social-icon" src={google} alt="google icon" />
//                                     </Link>
//                                 </div>
//                             </form>
//                         ) : (
//                             <form className="form" onSubmit={handleSubmit}>
//                                 <h2 className="form__title">Sign up</h2>
//                                 <div className="form__inputs">
//                                     <img className="form__icon" src={user} alt="user icon" />
//                                     <input className="form__input" type="text" placeholder="Username" />
//                                 </div>
//                                 <div className="form__inputs">
//                                     <img className="form__icon" src={mail} alt="email icon" />
//                                     <input className="form__input" type="email" placeholder="Email" />
//                                 </div>
//                                 <div className="form__inputs">
//                                     <img className="form__icon" src={lock} alt="lock icon" />
//                                     <input className="form__input" type="password" placeholder="Password" />
//                                 </div>
//                                 <Link to="/profile" className="form__btn btn"> Sign Up </Link>

//                                 <p className="form__text text">Or Sign Up with social platforms</p>
//                                 <div className="form__social">
//                                     <Link to="" className="form__social-link">
//                                         <img className="form__social-icon" src={facebook} alt="facbook icon" />
//                                     </Link>
//                                     <Link to="" className="form__social-link">
//                                         <img className="form__social-icon" src={instagram} alt="instagram icon" />
//                                     </Link>
//                                     <Link to="" className="form__social-link">
//                                         <img className="form__social-icon" src={google} alt="google icon" />
//                                     </Link>
//                                 </div>
//                             </form>
//                         )}
//                     </div>
//                 </div>

//                 <div className="panel">
//                     {isLogin ? (
//                         <div className="panel__left">
//                             <div className="panel__content">
//                                 <h3 className="panel__title">New here?</h3>
//                                 <p className="panel__text text">Join the community of socially conscious individuals who prioritize kindness and compassion in their daily lives.</p>
//                                 {/* <Link to="/signup" className="panel__btn-link"> */}
//                                 <button className="panel__btn btn" onClick={handleToggleForm}>
//                                     Sign up
//                                 </button>
//                                 {/* </Link> */}
//                             </div>
//                             <img src={signup} className="panel__img" alt="sign up" />
//                         </div>
//                     ) : (

//                         <div className="panel__right">
//                             <div className="panel__content">
//                                 <h3 className="panel__title">One of us?</h3>
//                                 <p className="panel__text text">Welcome back! We've missed you, ready to do more good in the world and make a positive impact on others? </p>
//                                 <button className="panel__btn btn" onClick={handleToggleForm}>
//                                     Sign in
//                                 </button>
//                             </div>
//                             <img src={signup} className="panel__img" alt="sign up" />
//                         </div>
//                     )}
//                 </div>
//             </section>
//         </>
//     )
// }
// export default SignUpForm;