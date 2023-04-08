import React from 'react'
import "../UserProfile/UserProfile.scss"
import heart from "../../assets/icons/heart.svg"

function UserProfile({ userImage, userName, userDescription }) {
    return (
        <>
            <section className="user__profile">
                <article className="user__info">
                    <div className="user__img">
                        <img className="user__avatar" src={userImage} />
                    </div>

                    <div className="user__data">
                        <div className="user__names">
                            <h4 className="user__title">Name</h4>
                            <p className="user__input">{userName}</p>
                        </div>

                        <div className="user__ranks">
                            <h4 className="user__title">Rank</h4>
                            <p className="user__input">Kindness Master</p>
                        </div>

                        <div className="user__location">
                            <h4 className="user__title">Location</h4>
                            <p className="user__input">Vancouver, BC</p>
                        </div>
                    </div>
                </article>

                <div className="user__info">
                    <div className="user__about">
                        <h4 className="user__title">About me</h4>
                        <p className="user__input">{userDescription}</p>
                    </div>

                    {/* <div className="user__stats">
                        <h4 className="user__title"> Stats</h4>
                        <img className="user__icon" src={heart} />
                        <p className="user__input">23 kind acts completed!</p>
                    </div> */}

                </div>
            </section>

            <div className="user__stats">
                <h4 className="user__title"> Stats</h4>
                <img className="user__icon" src={heart} />
                <p className="user__input">23 kind acts completed!</p>
            </div>
        </>
    )
}

export default UserProfile;