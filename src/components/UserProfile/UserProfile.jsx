import "../UserProfile/UserProfile.scss";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function UserProfile() {

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
                <div className="user__profile">
                    <img className="user__img"></img>
                    <h3 className="user__name"></h3>
                </div>

                <div className="user__bio">
                    <h3 className="user__name"> About me: </h3>
                    <p className="user__description"></p>
                </div>
            </section>
        </main>

    );
}

export default UserProfile;