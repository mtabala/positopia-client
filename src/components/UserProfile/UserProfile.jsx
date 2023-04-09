import React from 'react'
import "../UserProfile/UserProfile.scss"
import heart from "../../assets/icons/heart.svg"

function UserProfile({ id, image, name, description, rank, location, currentActs, completedActs }) {
    return (
        <>
            <section className="user__profile">
                <article className="user__info">
                    <div className="user__img">
                        <img className="user__avatar" src={image} />
                    </div>

                    <div className="user__data">
                        <div className="user__names">
                            <h4 className="user__title">Name</h4>
                            <p className="user__input">{name}</p>
                        </div>

                        <div className="user__ranks">
                            <h4 className="user__title">Rank</h4>
                            <p className="user__input">{rank}</p>
                        </div>

                        <div className="user__location">
                            <h4 className="user__title">Location</h4>
                            <p className="user__input">{location}</p>
                        </div>
                    </div>

                    <div className="user__current">
                        <h4 className="user__title"> Current Acts of Kindness: </h4>
                        <ul className="user__acts-list">
                            {currentActs.map(act => (
                                <li key={act} className="user__input">◊ {act}</li>
                            ))}
                        </ul>
                    </div>
                </article>

                <div className="user__info">
                    <div className="user__about">
                        <h4 className="user__title">About me</h4>
                        <p className="user__input">{description}</p>
                    </div>

                    <div className="user__stats">
                        <h4 className="user__title"> Stats</h4>
                        <p className="user__input"> 13 Acts of Kindness completed</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default UserProfile;